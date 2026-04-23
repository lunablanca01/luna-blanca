// 🔌 Módulo para manejo de lectura con Supabase (auto-ejecutable)

import { supabase } from './supabase.js';
import { novelas } from './tarjetas.js'; // 👈 IMPORTANTE

async function initLectura(tituloActual) {
  if (!tituloActual || location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado o título no encontrado");
    return;
  }

  // 🔍 Buscar novela actual
  const novelaData = novelas.find(
    n => n.titulo.trim().toLowerCase() === tituloActual.trim().toLowerCase()
  );

  if (!novelaData) {
    console.warn("❌ No se encontró la novela:", tituloActual);
    return;
  }

  const novelaId = novelaData.novela_id; // 👈 CLAVE

  // 🔐 Obtener usuario
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 🔐 Obtener rol
  const { data: perfil, error: errorPerfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .maybeSingle();

  if (errorPerfil) {
    console.error("Error obteniendo rol:", errorPerfil);
  }

  // 🎯 SOLO ADMIN → mostrar epub
  if (perfil?.rol === "admin") {
    const epubContainer = document.getElementById("epub-container");

    if (epubContainer) {
      epubContainer.style.display = "block";

      const linkEpub = novelaData?.link;

      if (linkEpub) {
        epubContainer.innerHTML = `
          <div class="epub">
            Leer en: <a href="${linkEpub}" target="_blank">ePub</a>
          </div>
        `;
      }
    }
  }

  // ================================
  // 📌 ELEMENTOS DE LA PÁGINA
  // ================================
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  const btnEliminar = document.getElementById("eliminar-lectura");

  if (!selectEstado || !inputProgreso) return;

  // Valores por defecto
  selectEstado.value = "";
  inputProgreso.value = 0;

  // 🔍 Cargar desde Supabase
  const { data } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela_id", novelaId) // ✅ CAMBIO
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso ?? 0;
  }

  // 💾 Guardar
  if (btnGuardar) {
    btnGuardar.addEventListener("click", async () => {

      if (!selectEstado.value) {
        alert("Selecciona un estado");
        return;
      }

      const valor = parseInt(inputProgreso.value) || 0;

      const { error } = await supabase.from("lecturas").upsert(
        {
          usuario_id: user.id,
          novela_id: novelaId, // ✅ CAMBIO
          estado: selectEstado.value,
          progreso: valor
        },
        { onConflict: ["usuario_id", "novela_id"] } // ✅ CAMBIO
      );

      if (error) {
        console.error("Error Supabase:", error);
        mostrarToast("Error al guardar", "error");
      } else {
        mostrarToast("Guardado", "ok");
      }
    });
  }

  // 🗑️ Eliminar
  if (btnEliminar) {
    btnEliminar.addEventListener("click", async () => {

      const confirmar = confirm("¿Eliminar esta novela de tu lista?");
      if (!confirmar) return;

      const { error } = await supabase.from("lecturas")
        .delete()
        .eq("usuario_id", user.id)
        .eq("novela_id", novelaId); // ✅ CAMBIO

      if (error) {
        console.error("Error al eliminar:", error);
        mostrarToast("Error al eliminar", "error");
      } else {
        selectEstado.value = "";
        inputProgreso.value = 0;
        mostrarToast("Eliminado", "ok");
      }
    });
  }
}

// 🔔 Toast
function mostrarToast(mensaje, tipo = "ok") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = (tipo === "ok" ? "✅ " : "❌ ") + mensaje;
  toast.className = "toast show " + tipo;

  setTimeout(() => toast.classList.remove("show"), 2000);
}

// 🚀 Auto iniciar
document.addEventListener("DOMContentLoaded", () => {
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  initLectura(tituloActual);
});
