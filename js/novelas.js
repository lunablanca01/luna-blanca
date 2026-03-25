/* ================================
   🧰 FUNCIONES Y LÓGICA COMÚN
   (Todo lo que no depende de Supabase)
================================ */

// ... aquí va todo tu código de tarjetas, autor, tags, toast, capítulos, epub, etc.
// No cambiar nada de lo que ya funciona.

/* ================================
   💾 LECTURA (SUPABASE) SOLO REMOTO
================================ */

document.addEventListener("DOMContentLoaded", async () => {
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");

  // Si estamos en local (file://) no usamos Supabase
  if (location.protocol === "file:") {
    console.log("Modo local: Supabase desactivado");
    return; // terminamos aquí
  }

  // Solo se importa Supabase en remoto
  const { supabase } = await import("./supabase.js");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 🔹 Cargar datos
  const { data } = await supabase
    .from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", tituloActual)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso;
  }

  // 🔹 Guardar datos
  if (btnGuardar) {
    btnGuardar.addEventListener("click", async () => {
      const valor = parseInt(inputProgreso.value);
      if (isNaN(valor)) { alert("Ingresa un número válido"); return; }

      const { error } = await supabase.from("lecturas").upsert(
        {
          usuario_id: user.id,
          novela: tituloActual,
          estado: selectEstado.value,
          progreso: valor
        },
        { onConflict: ["usuario_id", "novela"] }
      );

      if (!error) mostrarToast("Guardado", "ok");
      else mostrarToast("Error al guardar", "error");
    });
  }
});
