import { supabase } from "./supabase.js";

function normalizarEstado(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión para ver tus lecturas ✨</div>`;
    return;
  }

  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id);

  if (error) {
    console.error("Error al traer lecturas:", error);
    contenedor.innerHTML = `<div class="sin-lecturas">Ocurrió un error al cargar tus lecturas</div>`;
    return;
  }

  window.lecturasUsuario = lecturas || [];
  mostrarLecturas(lecturas || []);
});

function mostrarLecturas(lecturas) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  contenedor.innerHTML = "";

  const emojiMap = {
    "por leer": "📕",
    "leyendo": "📖",
    "leido": "✅"
  };

  if (!lecturas || lecturas.length === 0) {
    contenedor.innerHTML = `<div class="sin-lecturas">Aún no tienes novelas en esta lista ✨</div>`;
    return;
  }

  lecturas.forEach(l => {
    const estado = normal
