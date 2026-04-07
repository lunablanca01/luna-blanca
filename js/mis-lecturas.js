import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

let filtroEstado = "todos";
let filtroNovela = "todos";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  try {
    const { data, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;

    const user = data?.user;
    if (!user) {
      contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión para ver tus lecturas ✨</div>`;
      return;
    }

    const { data: lecturas, error } = await supabase
      .from("lecturas")
      .select("novela, estado")
      .eq("usuario_id", user.id);
    if (error) throw error;

    mostrarLecturas(lecturas || []);
  } catch (err) {
    console.error(err);
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

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  aplicarFiltros();
}

// --- FILTROS ---

window.filtrar = function(estado) {
  filtroEstado = normalizarTexto(estado);
  marcarActivo(".filtro-lectura", estado);
  aplicarFiltros();
};

window.filtrarNovela = function(tag) {
  filtroNovela = tag.toLowerCase();
  marcarActivo(".filtro-novela", tag);
  aplicarFiltros();
};

function aplicarFiltros() {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {
    const estadoMatch = filtroEstado === "todos" || card.dataset.estado === filtroEstado;
    const tagMatch = filtroNovela === "todos" || (card.dataset.tags || "").toLowerCase().includes(filtroNovela);

    card.style.display = estadoMatch && tagMatch ? "block" : "none";
  });
}

// Marca el botón activo
function marcarActivo(selector, valor) {
  const botones = document.querySelectorAll(selector);
  botones.forEach(btn => btn.classList.remove("activo"));
  botones.forEach(btn => {
    if ((btn.dataset.estado && btn.dataset.estado === valor) ||
        (btn.dataset.tag && btn.dataset.tag.toLowerCase() === valor.toLowerCase())) {
      btn.classList.add("activo");
    }
  });
}
