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
    .select("novela_id, estado")
    .eq("usuario_id", user.id);

  if (error) {
    console.error("Error al traer lecturas:", error);
    return;
  }

  // Creamos un mapa de novela -> estado
  const mapaLecturas = {};
  lecturas?.forEach(l => {
    mapaLecturas[l.novela_id] = l.estado;
  });

  const emojiMap = {
    "por_leer": "📘",
    "leyendo": "📖",
    "leido": "✅",
    "leido_mtl": "🈶"
  };

  // Recorremos cada tarjeta
  cards.forEach(card => {

    const novelaId = card.dataset.novelaId;

    const estadoLectura = mapaLecturas[novelaId]?.toLowerCase();
    const emoji = emojiMap[estadoLectura];

    if (emoji) {
      const divEstado = document.createElement("div");
      divEstado.className = "estado-lectura";
      divEstado.textContent = emoji;
      card.insertAdjacentElement("afterbegin", divEstado);
    }
  });
});
