// estadoLectura.js
import { supabase } from "./supabase.js";

export async function aplicarEstadoLectura(contenedorId = "contenedor-tarjetas") {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  if (cards.length === 0) return;
  if (location.protocol === "file:") return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id);

  if (error) return console.error(error);

  const mapaLecturas = {};
  lecturas?.forEach(l => { mapaLecturas[l.novela] = l.estado; });

  const emojiMap = {
    "por_leer": "📘",
    "leyendo": "📖",
    "leido": "✅",
    "leido_mtl": "🈶"
  };

  cards.forEach(card => {
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if (!tituloCard) return;

    const estadoLectura = mapaLecturas[tituloCard]?.toLowerCase();
    const emoji = emojiMap[estadoLectura];
    if (!emoji) return;

    // Evitar duplicar emoji si ya existe
    if (!card.querySelector(".estado-lectura")) {
      const divEstado = document.createElement("div");
      divEstado.className = "estado-lectura";
      divEstado.textContent = emoji;
      card.insertAdjacentElement("afterbegin", divEstado);
    }
  });
}

// Si quieres autoejecutarlo solo para home
if (document.getElementById("contenedor-tarjetas")) {
  document.addEventListener("DOMContentLoaded", () => {
    aplicarEstadoLectura("contenedor-tarjetas");
  });
}
