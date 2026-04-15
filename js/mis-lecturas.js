import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

/* ================================
   🔤 NORMALIZAR TEXTO
================================ */
function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/* ================================
   🔤 LIMPIAR PARA ORDEN
================================ */
function limpiarTextoOrden(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/* ================================
   🔎 VARIABLES
================================ */
let filtrosSeleccionados = {
  estado: null,
  estadoNovela: null
};

let modoOrden = "az";
let ordenOriginal = [];

/* ================================
   🚀 INICIO
================================ */
document.addEventListener("DOMContentLoaded", async () => {

  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  /* 🔘 BOTONES FILTRO */
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      const grupo = btn.dataset.grupo;
      const valor = btn.dataset.valor;

      document.querySelectorAll(`.filtro-btn[data-grupo="${grupo}"]`)
        .forEach(b => b.classList.remove("activo"));

      btn.classList.add("activo");

      filtrosSeleccionados[grupo] = valor;
    });
  });

  /* 🔽 DROPDOWN */
  document.querySelectorAll(".filtro-header").forEach(header => {
    header.addEventListener("click", () => {
      const dropdown = header.parentElement;
      dropdown.classList.toggle("activo");
    });
  });

  /* 🔘 APLICAR */
  document.getElementById("btn-aplicar")?.addEventListener("click", () => {
    aplicarFiltros();
  });

  /* 🔘 LIMPIAR */
  document.getElementById("btn-limpiar")?.addEventListener("click", () => {

    filtrosSeleccionados = {
      estado: null,
      estadoNovela: null
    };

    document.querySelectorAll(".filtro-btn")
      .forEach(b => b.classList.remove("activo"));

    aplicarFiltros();
  });

  /* 🔽 ORDENAR DROPDOWN */
  const btnOrdenar = document.getElementById("btn-ordenar");
  const dropdownOrden = document.getElementById("dropdown-orden");

  if (btnOrdenar) {
    btnOrdenar.addEventListener("click", () => {
      dropdownOrden.classList.toggle("activo");
    });
  }

  document.querySelectorAll("#dropdown-orden button").forEach(btn => {
    btn.addEventListener("click", () => {
      modoOrden = btn.dataset.orden;
      ordenarTarjetasLecturas();
      dropdownOrden.classList.remove("activo");
    });
  });

  /* 🔐 SUPABASE */
  try {

    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error usuario:", userError);
      contenedor.innerHTML = `<div class="sin-lecturas">Error al obtener el usuario</div>`;
      return;
    }

    const user = data?.user;

    if (!user) {
      contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión ✨</div>`;
      return;
    }

    const { data: lecturas, error } = await supabase
      .from("lecturas")
      .select("novela, estado")
      .eq("usuario_id", user.id);

    if (error) {
      console.error("Error lecturas:", error);
      contenedor.innerHTML = `<div class="sin-lecturas">Error al cargar lecturas</div>`;
      return;
    }

    mostrarLecturas(lecturas || []);

  } catch (err) {
    console.error("Error general:", err);
    contenedor.innerHTML = `<div class="sin-lecturas">Algo salió mal</div>`;
  }
});

/* ================================
   📦 MOSTRAR LECTURAS
================================ */
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
    contenedor.innerHTML = `<div class="sin-lecturas">No tienes novelas ✨</div>`;
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

      const tagsArray = (novelaCompleta.tags || "").split(" ");
      const estadosNovela = ["finalizado", "en-proceso", "pendiente", "mtl"];
      const estadoNovela = tagsArray.find(t => estadosNovela.includes(t)) || "";

      divCard.dataset.estadoNovela = estadoNovela;

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;

    } else {

      divCard.dataset.estadoNovela = "";

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  /* 🔥 GUARDAR ORDEN ORIGINAL */
  ordenOriginal = Array.from(document.querySelectorAll("#contenedor-mis-lecturas .card"));

  window.aplicarEstadoNovela?.();

  aplicarFiltros();
}

/* ================================
   🔎 FILTROS
================================ */
function aplicarFiltros() {

  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {

    const cumpleLectura =
      !filtrosSeleccionados.estado ||
      card.dataset.estado === filtrosSeleccionados.estado;

    const cumpleNovela =
      !filtrosSeleccionados.estadoNovela ||
      card.dataset.estadoNovela === filtrosSeleccionados.estadoNovela;

    card.style.display = (cumpleLectura && cumpleNovela) ? "block" : "none";
  });

  ordenarTarjetasLecturas(); // 🔥 clave
}

/* ================================
   🔤 ORDENAR
================================ */
function ordenarTarjetasLecturas() {

  const contenedor = document.getElementById("contenedor-mis-lecturas");
  const tarjetas = Array.from(contenedor.querySelectorAll(".card"));

  tarjetas.sort((a, b) => {

    if (modoOrden === "az") {
      const tituloA = limpiarTextoOrden(a.querySelector("h3")?.textContent);
      const tituloB = limpiarTextoOrden(b.querySelector("h3")?.textContent);
      return tituloA.localeCompare(tituloB);
    }

    if (modoOrden === "update") {
      return ordenOriginal.indexOf(a) - ordenOriginal.indexOf(b);
    }

    return 0;
  });

  tarjetas.forEach(card => contenedor.appendChild(card));
}
