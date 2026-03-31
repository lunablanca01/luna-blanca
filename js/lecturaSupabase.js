// lecturaSupabase.js
// 🔌 Módulo para manejo de lectura con Supabase (auto-ejecutable)

import { supabase } from './supabase.js';

async function initLectura(tituloActual) {
  if (!tituloActual || location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado o título no encontrado");
    return;
  }

  // Obtener usuario
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Elementos de la página
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  const btnEliminar = document.getElementById("eliminar-lectura"); // 🗑️ botón

  if (!selectEstado || !inputProgreso) return;

  // ✅ VALORES POR DEFECTO (inmediato)
  selectEstado.value = ""; // "No leído"
  inputProgreso.value = 0;

  // 🔍 Cargar datos desde Supabase
  const { data } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", tituloActual)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso ?? 0;
  }

  // 💾 Guardar cambios
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

      if (error) {
        console.error("Error Supabase:", error);
        mostrarToast("Error al guardar", "error");
      } else {
        mostrarToast("Guardado", "ok");
      }
    });
  }

  // 🗑️ ELIMINAR lectura
  if (btnEliminar) {
    btnEliminar.addEventListener("click", async () => {

      const confirmar = confirm("¿Eliminar esta novela de tu lista?");
      if (!confirmar) return;

      const { error } = await supabase.from("lecturas")
        .delete()
        .eq("usuario_id", user.id)
        .eq("novela", tituloActual);

      if (error) {
        console.error("Error al eliminar:", error);
        mostrarToast("Error al eliminar", "error");
      } else {
        // 🔄 Reset visual
        selectEstado.value = ""; // No leído
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
