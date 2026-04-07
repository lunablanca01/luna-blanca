import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

// Filtros activos
let filtroEstadoLecturaActivo = "todos";
let filtroEstadoNovelaActivo = "todos";

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

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

    mostrarLecturas(lecturas || []);
  } catch (err) {
    console.error("Error general:", err);
    contenedor.innerHTML = `<div class="sin-lecturas">Algo salió mal al cargar la página</div>`;
  }
});

function mostrarLecturas(lecturas) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  contenedor.innerHTML = "";

  const emojiMap = {
    "por_leer": "📘",
    "leyendo": "📖",
    "leido": "✅",
    "leido_mtl": "🈶"
  };

  if (!lecturas.length) {
    contenedor.innerHTML = `<div class="sin-lecturas">Aún no tienes novelas en esta lista ✨</div>`;
    return;
  }

  lecturas.forEach(l => {
    const estadoLectura = normalizarTexto(l.estado);

    const novelaCompleta = novelas.find(n =>
      normalizarTexto(n.titulo) === normalizarTexto(l.novela)
    );

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.dataset.estado = estadoLectura;

    if (novelaCompleta) {
      // Guardamos tags y autor
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";
      // Guardamos estado de novela
      divCard.dataset.estadoNovela = normalizarTexto(novelaCompleta.estado || "pendiente");

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoLectura] || "📘"}</div>

        <div class="estado estado-${divCard.dataset.estadoNovela}">
          ${novelaCompleta.estado || "Pendiente"}
        </div>

        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>

        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      divCard.dataset.estadoNovela = "pendiente";
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoLectura] || "📘"}</div>
        <div class="estado estado-pendiente">Pendiente</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  aplicarFiltros();
}

// ================================
// FILTROS
// ================================
window.filtrar = function(estado) {
  filtroEstadoLecturaActivo = normalizarTexto(estado);
  actualizarBotones("filtros-estado", estado);
  aplicarFiltros();
};

window.filtrarNovela = function(estado) {
  filtroEstadoNovelaActivo = normalizarTexto(estado);
  actualizarBotones("filtros-novela", estado);
  aplicarFiltros();
};

function aplicarFiltros() {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {
    const coincideEstadoLectura =
      filtroEstadoLecturaActivo === "todos" || card.dataset.estado === filtroEstadoLecturaActivo;
    const coincideEstadoNovela =
      filtroEstadoNovelaActivo === "todos" || card.dataset.estadoNovela === filtroEstadoNovelaActivo;

    card.style.display = (coincideEstadoLectura && coincideEstadoNovela) ? "block" : "none";
  });
}

// ================================
// COLOR BOTON ACTIVO
// ================================
function actualizarBotones(claseContenedor, estado) {
  const contenedor = document.querySelector(`.${claseContenedor}`);
  if (!contenedor) return;

  const botones = contenedor.querySelectorAll("button");
  botones.forEach(btn => {
    btn.classList.remove("activo");
    if (normalizarTexto(btn.textContent) === normalizarTexto(estado)) {
      btn.classList.add("activo");
    }
  });
}
