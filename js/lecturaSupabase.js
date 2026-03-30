// lecturaSupabase.js
// 🔌 Módulo para manejo de lectura con Supabase (auto-ejecutable)

import { supabase } from './supabase.js';

async function initLectura(tituloActual) {
  if (!tituloActual || location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado o título no encontrado");
    return;
  }

  // 🔹 Obtener usuario
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 🔹 Determinar rol
  let usuarioRol = "user";
  const { data: perfil } = await supabase.from("perfiles").select("rol").eq("id", user.id).maybeSingle();
  if (perfil?.rol) usuarioRol = perfil.rol;

  window.usuarioRol = usuarioRol; // para compatibilidad

  // 🔹 Elementos de lectura
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  const btnEliminar = document.getElementById("eliminar-lectura"); // 🗑️ botón

  if (!selectEstado || !inputProgreso) return;

  // ✅ Valores por defecto
  selectEstado.value = "";
  inputProgreso.value = 0;

  // 🔹 Cargar datos desde Supabase
  const { data } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", tituloActual)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso ?? 0;
  }

  // 🔹 Guardar cambios
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
          novela: tituloActual,
          estado: selectEstado.value,
          progreso: valor
        },
        { onConflict: ["usuario_id", "novela"] }
      );

      if (error) mostrarToast("Error al guardar", "error");
      else mostrarToast("Guardado", "ok");
    });
  }

  // 🔹 Eliminar lectura
  if (btnEliminar) {
    btnEliminar.addEventListener("click", async () => {
      const confirmar = confirm("¿Eliminar esta novela de tu lista?");
      if (!confirmar) return;

      const { error } = await supabase.from("lecturas")
        .delete()
        .eq("usuario_id", user.id)
        .eq("novela", tituloActual);

      if (error) mostrarToast("Error al eliminar", "error");
      else {
        selectEstado.value = "";
        inputProgreso.value = 0;
        mostrarToast("Eliminado", "ok");
      }
    });
  }

  // 🔹 Mostrar EPUB solo si es admin
  const linkEpub = document.querySelector(".links-tarjeta a")?.href;
  const contenedorEpub = document.getElementById("epub-container");
  if (contenedorEpub && linkEpub) {
    if (usuarioRol === "admin") {
      contenedorEpub.style.display = "block";
      contenedorEpub.innerHTML = `<div class="epub">Leer en: <a href="${linkEpub}" target="_blank">ePub</a></div>`;
    } else {
      contenedorEpub.style.display = "none";
      contenedorEpub.innerHTML = "";
    }
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
