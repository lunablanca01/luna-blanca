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
// 🔥 ESTADO GLOBAL
// ================================
let filtrosSeleccionados = {
  estado: null,
  estadoNovela: null
};

let ordenActual = "az";

let lecturasGlobal = [];

let paginaActual = 1;
let tarjetasPorPagina = calcularTarjetasPorPagina();
let mostrarTodoActivo = false;

let listaFiltrada = [];

// ================================
// 🔗 URL
// ================================
function actualizarURL() {
  const params = new URLSearchParams();

  if (filtrosSeleccionados.estado) {
    params.set("estado", filtrosSeleccionados.estado);
  }

  if (filtrosSeleccionados.estadoNovela) {
    params.set("estadoNovela", filtrosSeleccionados.estadoNovela);
  }

  if (ordenActual !== "az") {
    params.set("orden", ordenActual);
  }

  if (paginaActual > 1) {
    params.set("pagina", paginaActual);
  }

  if (mostrarTodoActivo) {
    params.set("mostrar", "todo");
  }

  const nuevaURL = window.location.pathname + "?" + params.toString();
  window.history.replaceState({}, "", nuevaURL);
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

  document.getElementById("btn-descargar-lecturas")
  ?.addEventListener("click", descargarExcelLecturas);

  // ================================
  // 🔹 FILTROS UI
  // ================================
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

    document.querySelectorAll(".filtro-btn")
      .forEach(b => b.classList.remove("activo"));

    paginaActual = 1;
    actualizarURL();
    renderizar();
  });

  // ================================
  // 🔹 ORDEN
  // ================================
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

    if (btn.dataset.orden === ordenActual) {
      btn.classList.add("activo");
    }
  });

  // ================================
  // 🔹 MOSTRAR TODO
  // ================================
  document.getElementById("mostrar-todo-lecturas")?.addEventListener("click", () => {
    mostrarTodoActivo = !mostrarTodoActivo;

    document.getElementById("mostrar-todo-lecturas").textContent =
      mostrarTodoActivo ? "Paginado" : "Mostrar todo";

    actualizarURL();
    mostrarPagina();
  });

  // ================================
  // 🔹 DATA
  // ================================
  try {
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError || !data?.user) {
      contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión ✨</div>`;
      return;
    }

    const { data: lecturas, error } = await supabase
      .from("lecturas")
      .select("novela, estado")
      .eq("usuario_id", data.user.id);

    if (error) {
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

  lista.sort((a, b) => {
    const A = normalizarTexto(a.novela);
    const B = normalizarTexto(b.novela);

    if (ordenActual === "az") return A.localeCompare(B);
    if (ordenActual === "za") return B.localeCompare(A);
    return 0;
  });

  crearTarjetas(lista);

  aplicarFiltrosYMostrar();

}

// ================================
// 🔹 CREAR TARJETAS (FIX CLAVE)
// ================================
function crearTarjetas(lista) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  contenedor.innerHTML = "";

  const emojiMap = {
    "por_leer": "📘",
    "leyendo": "📖",
    "leido": "✅",
    "leido_mtl": "🈶"
  };

  lista.forEach(l => {
    const estado = normalizarTexto(l.estado);

    const novelaCompleta = novelas.find(n =>
      normalizarTexto(n.titulo) === normalizarTexto(l.novela)
    );

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.estado = estado;

    if (novelaCompleta) {
      const tags = novelaCompleta.tags || "";

      const estadoNovela = tags.split(" ").find(t =>
        ["finalizado", "en-proceso", "pendiente", "mtl"].includes(t)
      ) || "";

      card.dataset.estadoNovela = estadoNovela;

      // 🔥 IMPORTANTE: para estadoNovela.js
      card.dataset.tags = tags;

      card.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      card.dataset.estadoNovela = "";
      card.innerHTML = `
        <div class="estado-lectura">${emojiMap[estado] || "📘"}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(card);
  });

  // 🔥 FIX FINAL: volver a aplicar etiquetas
  window.aplicarEstadoNovela?.();
}

// ================================
// 🔥 FILTRAR + PAGINAR
// ================================
function aplicarFiltrosYMostrar() {
  const cards = Array.from(document.querySelectorAll(".card"));

  listaFiltrada = cards.filter(card => {
    const okEstado =
      !filtrosSeleccionados.estado ||
      card.dataset.estado === filtrosSeleccionados.estado;

    const okNovela =
      !filtrosSeleccionados.estadoNovela ||
      card.dataset.estadoNovela === filtrosSeleccionados.estadoNovela;

    return okEstado && okNovela;
  });

  if (!filtrosSeleccionados.estado && !filtrosSeleccionados.estadoNovela) {
    listaFiltrada = cards;
  }

  mostrarPagina();
}

// ================================
// 📄 PAGINACIÓN
// ================================
function mostrarPagina() {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  const todas = Array.from(contenedor.querySelectorAll(".card"));

  todas.forEach(c => c.style.display = "none");

  if (!listaFiltrada.length) {
    document.getElementById("paginacion-lecturas").innerHTML = "";
    contenedor.innerHTML = `<div class="sin-lecturas">No hay resultados ✨</div>`;
    return;
  }

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

  const crearBtn = (num) => {
    const btn = document.createElement("button");
    btn.textContent = num;

    if (num === paginaActual) btn.classList.add("activo");

    btn.onclick = () => {
      paginaActual = num;
      actualizarURL();
      mostrarPagina();
    };

    contenedor.appendChild(btn);
  };

  const crearDots = () => {
    const span = document.createElement("span");
    span.textContent = "...";
    span.className = "dots";
    contenedor.appendChild(span);
  };

  if (totalPaginas <= 7) {
    for (let i = 1; i <= totalPaginas; i++) crearBtn(i);
    return;
  }

  crearBtn(1);

  if (paginaActual > 3) crearDots();

  let inicio = Math.max(2, paginaActual - 1);
  let fin = Math.min(totalPaginas - 1, paginaActual + 1);

  for (let i = inicio; i <= fin; i++) crearBtn(i);

  if (paginaActual < totalPaginas - 2) crearDots();

  crearBtn(totalPaginas);
}

// ================================
// 📱 RESPONSIVE
// ================================
window.addEventListener("resize", () => {
  const nuevas = calcularTarjetasPorPagina();

  if (nuevas !== tarjetasPorPagina) {
    tarjetasPorPagina = nuevas;
    paginaActual = 1;
    mostrarPagina();
  }
});


// ================================
// ⬇️ DESCARGAR CSV (MIS LECTURAS)
// ================================
function descargarExcelLecturas() {

  const hayFiltroActivo =
    filtrosSeleccionados.estado ||
    filtrosSeleccionados.estadoNovela;

  let visibles = [];

  if (hayFiltroActivo) {
    visibles = listaFiltrada;
  } else {
    visibles = Array.from(document.querySelectorAll(".card"));
  }

  let contenido = "Novela,Estado\n";

  visibles.forEach(card => {
    const titulo = card.querySelector("h3")?.textContent || "";
    const estado = card.dataset.estado || "";

    const limpioTitulo = titulo.replace(/"/g, '""');
    const limpioEstado = estado.replace(/"/g, '""');

    contenido += `"${limpioTitulo}","${limpioEstado}"\n`;
  });

  const blob = new Blob(
    ["\uFEFF" + contenido],
    { type: "text/csv;charset=utf-8;" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mis_lecturas.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
