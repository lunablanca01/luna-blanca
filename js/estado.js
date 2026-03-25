import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  if (!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  if (cards.length === 0) return;

  if (location.protocol === "file:") return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Traemos todas las lecturas del usuario de una vez
  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id);

  if (error) {
    console.error("Error al traer lecturas:", error);
    return;
  }

  // Creamos un mapa de novela -> estado
  const mapaLecturas = {};
  lecturas?.forEach(l => {
    mapaLecturas[l.novela] = l.estado;
  });

  const emojiMap = {
    "por leer": "❌",
    "leyendo": "⏳",
    "leido": "✅"
  };

  // Recorremos cada tarjeta
  cards.forEach(card => {
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if (!tituloCard) return;

    const estadoLectura = mapaLecturas[tituloCard]?.toLowerCase(); // normalizamos
    const emoji = emojiMap[estadoLectura]; // si no hay estado, será undefined

    if (emoji) {
      const divEstado = document.createElement("div");
      divEstado.className = "estado-lectura";
      divEstado.textContent = emoji;
      card.insertAdjacentElement("afterbegin", divEstado);
    }
    // Si no hay estado guardado, no se muestra nada
  });
});
