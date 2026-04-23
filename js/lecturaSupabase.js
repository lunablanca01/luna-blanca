// lecturaSupabase.js
// 🔌 Módulo para manejo de lectura con Supabase (auto-ejecutable)

import { supabase } from './supabase.js';

async function initLectura() {

  if (location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado");
    return;
  }

  // ================================
  // 📌 OBTENER novela_id DESDE DOM
  // ================================
  const novelaId = document.querySelector(".contenedor")?.dataset.novelaId;

  if (!novelaId) {
    console.log("novela_id no encontrado en el DOM");
    return;
  }

  // ================================
  // 🔐 USUARIO
  // ================================
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // ================================
  // 🔐 ROL
  // ================================
  const { data: perfil, error: errorPerfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .maybeSingle();

  if (errorPerfil) {
    console.error("Error obteniendo rol:", errorPerfil);
  }

  // ================================
  // 🎯 SOLO ADMIN → EPUB
  // ================================
  if (perfil?.rol === "admin") {
    const epubContainer = document.getElementById("epub-container");

    if (epubContainer) {
      epubContainer.style.display = "block";

      const novelaData = novelas.find(n => n.novela_id == novelaId);
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
  // 📌 ELEMENTOS
  // ================================
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  const btnEliminar = document.getElementById("eliminar-lectura");

  if (!selectEstado || !inputProgreso) return;

  // reset visual
  selectEstado.value = "";
  inputProgreso.value = 0;

  // ================================
  // 🔍 CARGAR DESDE SUPABASE
  // ================================
  const { data } = await supabase
    .from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela_id", novelaId)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso ?? 0;
  }

  // ================================
  // 💾 GUARDAR
  // ================================
  if (btnGuardar) {
    btnGuardar.addEventListener("click", async () => {

      if (!selectEstado.value) {
        alert("Selecciona un estado");
        return;
      }

      const valor = parseInt(inputProgreso.value) || 0;

      const novelaData = novelas.find(n => n.novela_id == novelaId);

      const { error } = await supabase
        .from("lecturas")
        .upsert(
          {
            usuario_id: user.id,
            novela_id: novelaId,
            titulo: novelaData?.titulo,
            estado: selectEstado.value,
            progreso: valor
          },
          { onConflict: ["usuario_id", "novela_id"] }
        );

      if (error) {
        console.error("Error Supabase:", error);
        mostrarToast("Error al guardar", "error");
      } else {
        mostrarToast("Guardado", "ok");
      }
    });
  }

  // ================================
  // 🗑️ ELIMINAR
  // ================================
  if (btnEliminar) {
    btnEliminar.addEventListener("click", async () => {

      const confirmar = confirm("¿Eliminar esta novela de tu lista?");
      if (!confirmar) return;

      const { error } = await supabase
        .from("lecturas")
        .delete()
        .eq("usuario_id", user.id)
        .eq("novela_id", novelaId);

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

// ================================
// 🔔 TOAST
// ================================
function mostrarToast(mensaje, tipo = "ok") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = (tipo === "ok" ? "✅ " : "❌ ") + mensaje;
  toast.className = "toast show " + tipo;

  setTimeout(() => toast.classList.remove("show"), 2000);
}

// ================================
// 🚀 AUTO INICIO
// ================================
document.addEventListener("DOMContentLoaded", () => {
  initLectura();
});
