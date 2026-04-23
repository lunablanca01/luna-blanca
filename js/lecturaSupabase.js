// 🔌 Módulo para manejo de lectura con Supabase (auto-ejecutable)

import { supabase } from './supabase.js';

// 🔧 Normalizar slug
function normalizarSlug(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "_");
}

async function initLectura() {

  if (location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado");
    return;
  }

  // 🔥 IMPORTANTE: obtener novelas desde window
  const novelas = window.novelas || [];

  if (!novelas.length) {
    console.warn("❌ novelas no está cargado");
    return;
  }

  // 🔥 Obtener slug desde la URL
  const slugURL = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  // 🔍 Buscar novela
  const novelaData = novelas.find(n =>
    normalizarSlug(n.slug) === normalizarSlug(slugURL)
  );

  if (!novelaData) {
    console.warn("❌ No se encontró la novela:", slugURL);
    return;
  }

  const novelaId = novelaData.novela_id;

  // 🔐 Usuario
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 🔐 Rol
  const { data: perfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .maybeSingle();

  // 🎯 Admin → epub
  if (perfil?.rol === "admin") {
    const epubContainer = document.getElementById("epub-container");

    if (epubContainer) {
      epubContainer.style.display = "block";

      if (novelaData.link) {
        epubContainer.innerHTML = `
          <div class="epub">
            Leer en: <a href="${novelaData.link}" target="_blank">ePub</a>
          </div>
        `;
      }
    }
  }

  // 📌 Elementos
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  const btnEliminar = document.getElementById("eliminar-lectura");

  if (!selectEstado || !inputProgreso) return;

  selectEstado.value = "";
  inputProgreso.value = 0;

  // 🔍 Cargar datos
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
          novela_id: novelaId,
          estado: selectEstado.value,
          progreso: valor
        },
        { onConflict: ["usuario_id", "novela_id"] }
      );

      if (error) {
        console.error(error);
        mostrarToast("Error al guardar", "error");
      } else {
        mostrarToast("Guardado", "ok");
      }
    });
  }

  // 🗑️ Eliminar
  if (btnEliminar) {
    btnEliminar.addEventListener("click", async () => {

      if (!confirm("¿Eliminar esta novela?")) return;

      const { error } = await supabase.from("lecturas")
        .delete()
        .eq("usuario_id", user.id)
        .eq("novela_id", novelaId);

      if (error) {
        console.error(error);
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

// 🚀 INIT
document.addEventListener("DOMContentLoaded", initLectura);
