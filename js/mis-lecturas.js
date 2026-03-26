import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  // Traemos solo las lecturas del usuario
  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("novela, estado")
    .eq("usuario_id", user.id);

  if (error) {
    console.error("Error al traer lecturas:", error);
    return;
  }

  // Guardamos los datos para filtros
  window.lecturasUsuario = lecturas || [];

  mostrarLecturas(lecturas);
});

// Función para mostrar tarjetas
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
    const estado = (l.estado || "").toLowerCase();

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.dataset.estado = estado;

    const divEstado = document.createElement("div");
    divEstado.className = "estado-lectura";
    divEstado.textContent = emojiMap[estado] || "📘";

    const h3 = document.createElement("h3");
    h3.textContent = l.novela || "Sin título";

    const textoEstado = document.createElement("div");
    textoEstado.className = "texto-estado";
    textoEstado.textContent = l.estado || "";

    divCard.appendChild(divEstado);
    divCard.appendChild(h3);
    divCard.appendChild(textoEstado);
    contenedor.appendChild(divCard);
  });
}

// Función para filtrar por estado
window.filtrar = function(estado) {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");
  cards.forEach(card => {
    if (estado === "todos" || card.dataset.estado === estado.toLowerCase()) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
