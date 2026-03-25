// estado.js optimizado para muchos libros
import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  if (!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  if (cards.length === 0) return; // aún no hay tarjetas

  // Evitar correr en local file://
  if (location.protocol === "file:") return;

  // Obtener usuario actual
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // 1️⃣ Traer todos los estados de lectura del usuario en una sola consulta
  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id);

  if (error) {
    console.error("Error al traer lecturas:", error);
    return;
  }

  // 2️⃣ Crear un mapa rápido { novela: estado }
  const mapaLecturas = {};
  lecturas?.forEach(l => {
    mapaLecturas[l.novela] = l.estado;
  });

  // 3️⃣ Emoji según estado
  const emojiMap = { "por leer": "📖", "leyendo": "🔖", "leído": "✅" };

  // 4️⃣ Aplicar estado a cada tarjeta
  cards.forEach(card => {
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if (!tituloCard) return;

    const estadoLectura = mapaLecturas[tituloCard] || "por leer";

    const divEstado = document.createElement("div");
    divEstado.className = "estado-lectura";
    divEstado.textContent = emojiMap[estadoLectura] || "📖"; // solo emoji

    // Insertar al inicio de la tarjeta
    card.insertAdjacentElement("afterbegin", divEstado);
  });
});
