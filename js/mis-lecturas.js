import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// filtros activos
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
    const estado = normalizarTexto(l.estado);

    const novelaCompleta = novelas.find(n =>
      normalizarTexto(n.titulo) === normalizarTexto(l.novela)
    );

    const divCard = document.createElement("div");
    divCard.className = "card";
    divCard.dataset.estado = estado;

    if (novelaCompleta) {
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";

      // Extraer estado de novela desde tags
      const tagsArray = (novelaCompleta.tags || "").split(" ");
      const estadosNovela = ["finalizado", "en-proceso", "pendiente", "mtl"];
      const estadoNovela = tagsArray.find(t => estadosNovela.includes(t)) || "";
      divCard.dataset.estadoNovela = estadoNovela;

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>

        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>

        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      divCard.dataset.estadoNovela = ""; // si no hay datos, vacío
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  window.aplicarEstadoNovela();
  aplicarFiltros(); // aplicar filtros al cargar
}

// Filtrar por estado de lectura
window.filtrar = function(estadoFiltro) {
  filtroEstadoLectura = estadoFiltro;
  aplicarFiltros();
};

// Filtrar por estado de novela
window.filtrarNovela = function(estadoFiltro) {
  filtroEstadoNovela = estadoFiltro;
  aplicarFiltros();
};

// Función que aplica ambos filtros combinados
function aplicarFiltros() {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {
    const cumpleLectura =
      filtroEstadoLectura === "todos" || card.dataset.estado === filtroEstadoLectura;
    const cumpleNovela =
      filtroEstadoNovela === "todos" || card.dataset.estadoNovela === filtroEstadoNovela;

    card.style.display = cumpleLectura && cumpleNovela ? "block" : "none";
  });

  actualizarBotonesActivos();
}

// Resaltar botones activos
function actualizarBotonesActivos() {
  // Lectura
  document.querySelectorAll(".filtros-estado .filtro-btn").forEach(btn => {
    btn.classList.remove("activo");
    if (normalizarTexto(btn.getAttribute("onclick").split("'")[1]) === filtroEstadoLectura) {
      btn.classList.add("activo");
    }
  });

  // Novela
  document.querySelectorAll(".filtros-novela .filtro-btn").forEach(btn => {
    btn.classList.remove("activo");
    if (normalizarTexto(btn.getAttribute("onclick").split("'")[1]) === filtroEstadoNovela) {
      btn.classList.add("activo");
    }
  });
}
