import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Filtros activos
let filtroEstadoLectura = "todos";
let filtroEstadoNovela = "todos";

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
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";

      // Estado de novela
      const estadoNovela = normalizarTexto(novelaCompleta.estado || "pendiente");
      divCard.dataset.estadoNovela = estadoNovela; // para filtrar
      const claseEstado = `estado estado-${estadoNovela}`;

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoLectura] || "📘"}</div>
        <div class="${claseEstado}">${novelaCompleta.estado || "Pendiente"}</div>
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      divCard.dataset.estadoNovela = "pendiente"; // default
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

// =======================
// FILTRO ESTADO DE LECTURA
// =======================
window.filtrar = function(estado) {
  filtroEstadoLectura = normalizarTexto(estado);
  marcarBotonActivo(".filtros-estado button", estado);
  aplicarFiltros();
};

// =======================
// FILTRO ESTADO DE NOVELA
// =======================
window.filtrarNovela = function(estado) {
  filtroEstadoNovela = normalizarTexto(estado);
  marcarBotonActivo(".filtros-novela button", estado);
  aplicarFiltros();
};

// =======================
// FUNCION QUE APLICA LOS DOS FILTROS
// =======================
function aplicarFiltros() {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {
    const mostrarLectura =
      filtroEstadoLectura === "todos" || card.dataset.estado === filtroEstadoLectura;
    const mostrarNovela =
      filtroEstadoNovela === "todos" || card.dataset.estadoNovela === filtroEstadoNovela;

    card.style.display = mostrarLectura && mostrarNovela ? "block" : "none";
  });
}

// =======================
// ACTIVAR BOTON OSCURO
// =======================
function marcarBotonActivo(selector, estado) {
  const botones = document.querySelectorAll(selector);
  botones.forEach(btn => {
    btn.classList.remove("activo");
    if (btn.textContent.toLowerCase().includes(estado.replace("_", ""))) {
      btn.classList.add("activo");
    }
    if (estado === "todos" && btn.textContent.toLowerCase().includes("mostrar")) {
      btn.classList.add("activo");
    }
  });
}
