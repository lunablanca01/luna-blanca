// estado.js optimizado
import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  if (!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  if (cards.length === 0) return; // aún no hay tarjetas

  // No correr en local file://
  if (location.protocol === "file:") return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Obtener títulos de todas las tarjetas
  const titulos = Array.from(cards)
    .map(card => card.querySelector("h3")?.textContent.trim())
    .filter(Boolean);

  if (titulos.length === 0) return;

  // Traer todos los estados de lectura de una sola vez
  const { data: lecturas } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id)
    .in("novela", titulos);

  // Crear un mapa para acceso rápido
  const mapaLecturas = {};
  lecturas?.forEach(l => {
    mapaLecturas[l.novela] = l.estado;
  });

  // Emoji según estado
  const emojiMap = { "por leer": "📖", "leyendo": "🔖", "leído": "✅" };

  // Aplicar estado a cada tarjeta
  cards.forEach(card => {
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    const estadoLectura = mapaLecturas[tituloCard] || "por leer";

    const divEstado = document.createElement("div");
    divEstado.className = "estado-lectura";
    divEstado.textContent = emojiMap[estadoLectura] || "📖";

    card.insertAdjacentElement("afterbegin", divEstado);
  });
});
