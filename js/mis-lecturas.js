import { supabase } from "./supabase.js";
import { novelas } from "./tarjetas.js";

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function normalizarEstado(texto) {
  return normalizarTexto(texto);
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");

  if (!contenedor) {
    console.error("No existe el contenedor #contenedor-mis-lecturas");
    return;
  }

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  try {
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error al obtener usuario:", userError);
      contenedor.innerHTML = `<div class="sin-lecturas">Error al obtener el usuario</div>`;
      return;
    }

    const user = data?.user;

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

  } catch (err) {
    console.error("Error general:", err);
    contenedor.innerHTML = `<div class="sin-lecturas">Algo salió mal al cargar la página</div>`;
  }
});

function mostrarLecturas(lecturas) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

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
    const estado = normalizarEstado(l.estado);

    const novelaCompleta = novelas.find(n =>
      normalizarTexto(n.titulo) === normalizarTexto(l.novela)
    );

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.dataset.estado = estado;

    if (novelaCompleta) {
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>

        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>

        <h3>${novelaCompleta.titulo}</h3>

        <div class="links-tarjeta">
          <a href="${novelaCompleta.link}"
             target="_blank"
             onclick="event.stopPropagation()">ePub</a>
        </div>

        <div class="texto-estado">${l.estado || "Sin estado"}</div>
      `;
    } else {
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
        <div class="texto-estado">${l.estado || "Sin estado"}</div>
      `;
    }

    contenedor.appendChild(divCard);
  });
}

window.filtrar = function(estadoFiltro) {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");
  const estadoNormalizado = normalizarEstado(estadoFiltro);

  cards.forEach(card => {
    if (estadoNormalizado === "todos" || card.dataset.estado === estadoNormalizado) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
