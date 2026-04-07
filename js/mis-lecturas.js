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
let filtroLecturaActivo = "todos";
let filtroNovelaActivo = "todos";

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
    contenedor.innerHTML = `<div class="sin-lecturas">Ocurrió un error al cargar tus lecturas</div>`;
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
    divCard.dataset.estadoLectura = estadoLectura;

    if (novelaCompleta) {
      const estadoNovela = normalizarTexto(novelaCompleta.estado || "pendiente");
      divCard.dataset.estadoNovela = estadoNovela;
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoLectura] || "📘"}</div>
        ${estadoNovela ? `<div class="texto-estado estado-${estadoNovela}">${estadoNovela.replace("_", " ")}</div>` : ""}
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      // Si no se encuentra la novela en tu array, solo ponemos el emoji y el título
      divCard.dataset.estadoNovela = "desconocido";
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoLectura] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  aplicarFiltros();
}

function aplicarFiltros() {
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");
  cards.forEach(card => {
    const lectura = card.dataset.estadoLectura;
    const novela = card.dataset.estadoNovela;

    const mostrar =
      (filtroLecturaActivo === "todos" || lectura === filtroLecturaActivo) &&
      (filtroNovelaActivo === "todos" || novela === filtroNovelaActivo);

    card.style.display = mostrar ? "block" : "none";
  });
}

// filtros por lectura
window.filtrar = function(estado) {
  filtroLecturaActivo = normalizarTexto(estado);
  aplicarFiltros();
  actualizarBotones("estado-lectura", filtroLecturaActivo);
};

// filtros por estado de novela
window.filtrarNovela = function(estado) {
  filtroNovelaActivo = normalizarTexto(estado);
  aplicarFiltros();
  actualizarBotones("estado-novela", filtroNovelaActivo);
};

// actualizar botones activos
function actualizarBotones(tipo, activo) {
  const selector = tipo === "estado-lectura" ? ".filtros-estado button" : ".filtros-novela button";
  const botones = document.querySelectorAll(selector);

  botones.forEach(btn => {
    const valor = normalizarTexto(btn.textContent);
    btn.classList.toggle("activo", valor.includes(activo.replace("_", " ")));
  });
}
