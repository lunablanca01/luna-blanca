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
  if (!selectEstado || !inputProgreso) return;

  // Cargar estado existente
  const { data } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", tituloActual)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso;
  }

  // Guardar cambios
  if (btnGuardar) {
    btnGuardar.addEventListener("click", async () => {
      const valor = parseInt(inputProgreso.value);
      if (isNaN(valor)) {
        alert("Ingresa un número válido");
        return;
      }

      const { error } = await supabase.from("lecturas").upsert(
        {
          usuario_id: user.id,
          novela: tituloActual,
          estado: selectEstado.value,
          progreso: valor
        },
        { onConflict: ["usuario_id", "novela"] }
      );

      mostrarToast(error ? "Error al guardar" : "Guardado", error ? "error" : "ok");
    });
  }
}

// Función para mostrar toast
function mostrarToast(mensaje, tipo = "ok") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = (tipo === "ok" ? "✅ " : "❌ ") + mensaje;
  toast.className = "toast show " + tipo;
  setTimeout(() => toast.classList.remove("show"), 2000);
}

// Auto-ejecutar cuando carga la página
document.addEventListener("DOMContentLoaded", () => {
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  initLectura(tituloActual);
});