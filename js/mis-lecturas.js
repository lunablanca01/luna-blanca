import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

// ================================
// 🔤 UTIL
// ================================
function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .trim();
}

function calcularTarjetasPorPagina() {
  const ancho = window.innerWidth;

  if (ancho > 1300) return 21;
  if (ancho > 1243) return 24;
  if (ancho > 1092) return 20;
  if (ancho > 789) return 24;
  if (ancho > 649) return 20;
  if (ancho > 500) return 15;
  return 12;
}

// ================================
// 🔥 HELPERS
// ================================
function obtenerNovela(l) {
  return novelas.find(n =>
    normalizarTexto(n.titulo) === normalizarTexto(l.novela)
  );
}

function obtenerEstadoNovela(novela) {
  if (!novela?.tags) return "";
  return novela.tags
    .split(" ")
    .find(t => ["finalizado", "en-proceso", "pendiente", "mtl"].includes(t)) || "";
}

// ================================
// 🔥 ESTADO GLOBAL
// ================================
let filtrosSeleccionados = {
  estado: null,
  estadoNovela: null
};

let ordenActual = "az";

let lecturasGlobal = [];
let listaFiltrada = [];

let paginaActual = 1;
let tarjetasPorPagina = calcularTarjetasPorPagina();
let mostrarTodoActivo = false;

// ================================
// 🔗 URL
// ================================
function actualizarURL() {
  const params = new URLSearchParams();

  if (filtrosSeleccionados.estado) params.set("estado", filtrosSeleccionados.estado);
  if (filtrosSeleccionados.estadoNovela) params.set("estadoNovela", filtrosSeleccionados.estadoNovela);
  if (ordenActual !== "az") params.set("orden", ordenActual);
  if (paginaActual > 1) params.set("pagina", paginaActual);
  if (mostrarTodoActivo) params.set("mostrar", "todo");

  window.history.replaceState({}, "", window.location.pathname + "?" + params.toString());
}

// ================================
// 🚀 INIT
// ================================
document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  const params = new URLSearchParams(window.location.search);

  filtrosSeleccionados.estado = params.get("estado");
  filtrosSeleccionados.estadoNovela = params.get("estadoNovela");
  ordenActual = params.get("orden") || "az";
  paginaActual = parseInt(params.get("pagina")) || 1;
  mostrarTodoActivo = params.get("mostrar") === "todo";

  // filtros UI
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const grupo = btn.dataset.grupo;
      const valor = btn.dataset.valor;

      document.querySelectorAll(`.filtro-btn[data-grupo="${grupo}"]`)
        .forEach(b => b.classList.remove("activo"));

      btn.classList.add("activo");
      filtrosSeleccionados[grupo] = valor;
    });

    if (btn.dataset.valor === filtrosSeleccionados[btn.dataset.grupo]) {
      btn.classList.add("activo");
    }
  });

  // abrir filtros
  document.querySelectorAll(".filtro-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("activo");
    });
  });

  document.getElementById("btn-aplicar")?.addEventListener("click", () => {
    paginaActual = 1;
    actualizarURL();
    renderizar();
  });

  document.getElementById("btn-limpiar")?.addEventListener("click", () => {
    filtrosSeleccionados = { estado: null, estadoNovela: null };
    ordenActual = "az";
    paginaActual = 1;

    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("activo"));

    actualizarURL();
    renderizar();
  });

  // orden
  const btnOrdenar = document.getElementById("btn-ordenar");
  const dropdownOrden = document.getElementById("dropdown-orden");

  btnOrdenar?.addEventListener("click", () => {
    dropdownOrden.classList.toggle("activo");
  });

  document.querySelectorAll("#dropdown-orden button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#dropdown-orden button")
        .forEach(b => b.classList.remove("activo"));

      btn.classList.add("activo");

      ordenActual = btn.dataset.orden;
      paginaActual = 1;

      actualizarURL();
      renderizar();

      dropdownOrden.classList.remove("activo");
    });
  });

  // mostrar todo
  document.getElementById("mostrar-todo-lecturas")?.addEventListener("click", () => {
    mostrarTodoActivo = !mostrarTodoActivo;

    document.getElementById("mostrar-todo-lecturas").textContent =
      mostrarTodoActivo ? "Paginado" : "Mostrar todo";

    actualizarURL();
    mostrarPagina();
  });

  // DATA
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
      contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión ✨</div>`;
      return;
    }

    const { data: lecturas, error: err2 } = await supabase
      .from("lecturas")
      .select("novela, estado")
      .eq("usuario_id", data.user.id);

    if (err2) {
      contenedor.innerHTML = `<div class="sin-lecturas">Error al cargar</div>`;
      return;
    }

    lecturasGlobal = lecturas || [];
    renderizar();

  } catch {
    contenedor.innerHTML = `<div class="sin-lecturas">Error general</div>`;
  }
});

// ================================
// 🔥 RENDER
// ================================
function renderizar() {
  let lista = [...lecturasGlobal];

  // orden
  lista.sort((a, b) => {
    const A = normalizarTexto(a.novela);
    const B = normalizarTexto(b.novela);

    return ordenActual === "az"
      ? A.localeCompare(B)
      : B.localeCompare(A);
  });

  // filtros + estado novela (CORRECTO)
  listaFiltrada = lista.filter(l => {
    const estado = normalizarTexto(l.estado);
    const novela = obtenerNovela(l);
    const estadoNovela = obtenerEstadoNovela(novela);

    const okEstado =
      !filtrosSeleccionados.estado ||
      estado === filtrosSeleccionados.estado;

    const okNovela =
      !filtrosSeleccionados.estadoNovela ||
      estadoNovela === filtrosSeleccionados.estadoNovela;

    return okEstado && okNovela;
  });

  crearTarjetas(listaFiltrada);
  mostrarPagina();
}

// ================================
// 🔥 TARJETAS
// ================================
function crearTarjetas(lista) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  contenedor.innerHTML = "";

  const emojiMap = {
    por_leer: "📘",
    leyendo: "📖",
    leido: "✅",
    leido_mtl: "🈶"
  };

  lista.forEach(l => {
    const estado = normalizarTexto(l.estado);
    const novela = obtenerNovela(l);
    const estadoNovela = obtenerEstadoNovela(novela);

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.estado = estado;
    card.dataset.estadoNovela = estadoNovela;

    if (novela) {
      card.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <a href="../novelas/${novela.slug}.html">
          <img src="../imagenes/${novela.imagen}">
        </a>
        <h3>${novela.titulo}</h3>
      `;
    } else {
      card.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela}</h3>
      `;
    }

    contenedor.appendChild(card);
  });
}

// ================================
// 📄 PAGINACIÓN
// ================================
function mostrarPagina() {
  const cards = Array.from(document.querySelectorAll(".card"));

  cards.forEach(c => c.style.display = "none");

  if (!listaFiltrada.length) return;

  if (mostrarTodoActivo) {
    listaFiltrada.forEach(c => c.style.display = "block");
    generarPaginacion(listaFiltrada.length);
    return;
  }

  const inicio = (paginaActual - 1) * tarjetasPorPagina;
  const fin = inicio + tarjetasPorPagina;

  listaFiltrada.forEach((c, i) => {
    if (i >= inicio && i < fin) c.style.display = "block";
  });

  generarPaginacion(listaFiltrada.length);
}

// ================================
// 🔢 PAGINACIÓN
// ================================
function generarPaginacion(total) {
  const contenedor = document.getElementById("paginacion-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (mostrarTodoActivo) return;

  const totalPaginas = Math.ceil(total / tarjetasPorPagina);
  if (totalPaginas <= 1) return;

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    if (i === paginaActual) btn.classList.add("activo");

    btn.onclick = () => {
      paginaActual = i;
      actualizarURL();
      mostrarPagina();
    };

    contenedor.appendChild(btn);
  }
}

// ================================
// 📱 RESIZE
// ================================
window.addEventListener("resize", () => {
  const nuevas = calcularTarjetasPorPagina();

  if (nuevas !== tarjetasPorPagina) {
    tarjetasPorPagina = nuevas;
    paginaActual = 1;
    mostrarPagina();
  }
});
