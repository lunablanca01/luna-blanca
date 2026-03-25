import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
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

  if (error) {
    console.error("Error al traer lecturas:", error);
    return;
  }

  const mapaLecturas = {};
  lecturas?.forEach(l => {
    mapaLecturas[l.novela] = l.estado;
  });

  const emojiMap = { "por leer": "📖", "leyendo": "🔖", "leido": "✅" };

  cards.forEach(card => {
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if (!tituloCard) return;

    const estadoLectura = (mapaLecturas[tituloCard] || "por leer").toLowerCase();
    const emoji = emojiMap[estadoLectura] || "📖";

    const divEstado = document.createElement("div");
    divEstado.className = "estado-lectura";
    divEstado.textContent = emoji; // solo emoji

    card.insertAdjacentElement("afterbegin", divEstado);
  });
});
