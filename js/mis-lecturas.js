import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .trim();
}

// 🔥 FILTROS
let filtrosSeleccionados = {
  estado: null,
  estadoNovela: null
};

// 🔥 ORDEN
let ordenActual = "az";

// 🔥 DATA
let lecturasGlobal = [];

// 🔥 PAGINACIÓN
let paginaActual = 1;
let tarjetasPorPagina = 12;
let mostrarTodoActivo = false;
let listaFiltrada = [];

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  // ================================
  // 🔹 FILTROS
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
  });

  document.getElementById("btn-aplicar")?.addEventListener("click", aplicarFiltros);

  document.getElementById("btn-limpiar")?.addEventListener("click", () => {
    filtrosSeleccionados = { estado: null, estadoNovela: null };

    document.querySelectorAll(".filtro-btn")
      .forEach(b => b.classList.remove("activo"));

    aplicarFiltros();
  });

  // ================================
  // 🔹 ORDENAR
  // ================================
  const btnOrdenar = document.getElementById("btn-ordenar");
  const dropdownOrden = document.getElementById("dropdown-orden");

  btnOrdenar?.addEventListener("click", () => {
    dropdownOrden.classList.toggle("activo");
  });

  document.querySelectorAll("#dropdown-orden button").forEach(btn => {
    btn.addEventListener("click", () => {
      ordenActual = btn.dataset.orden;
      dropdownOrden.classList.remove("activo");
      renderizar();
    });
  });

  // ================================
  // 🔹 BOTÓN MOSTRAR TODO
  // ================================
  document.getElementById("mostrar-todo-lecturas")?.addEventListener("click", () => {
    mostrarTodoActivo = !mostrarTodoActivo;

    document.getElementById("mostrar-todo-lecturas").textContent =
      mostrarTodoActivo ? "Paginado" : "Mostrar todo";

    mostrarPaginaLecturas();
  });

  // ================================
  // 🔹 CARGAR DATOS
  // ================================
  try {
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) {
      contenedor.innerHTML = `<div class="sin-lecturas">Error usuario</div>`;
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
      contenedor.innerHTML = `<div class="sin-lecturas">Error al cargar</div>`;
      return;
    }

    lecturasGlobal = lecturas || [];
    renderizar();

  } catch (err) {
    contenedor.innerHTML = `<div class="sin-lecturas">Error general</div>`;
  }
});

// ================================
// 🔥 RENDER
// ================================
function renderizar() {
  let lista = [...lecturasGlobal];

  if (ordenActual === "az") {
    lista.sort((a, b) =>
      normalizarTexto(a.novela).localeCompare(normalizarTexto(b.novela))
    );
  }

  mostrarLecturas(lista);
}

// ================================
// 🔹 CREAR TARJETAS
// ================================
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
    contenedor.innerHTML = `<div class="sin-lecturas">No hay resultados ✨</div>`;
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

  aplicarFiltros();
}

// ================================
// 🔥 FILTRAR + PAGINAR
// ================================
function aplicarFiltros() {
  const cards = Array.from(document.querySelectorAll("#contenedor-mis-lecturas .card"));

  listaFiltrada = cards.filter(card => {
    const cumpleLectura =
      !filtrosSeleccionados.estado ||
      card.dataset.estado === filtrosSeleccionados.estado;

    const cumpleNovela =
      !filtrosSeleccionados.estadoNovela ||
      card.dataset.estadoNovela === filtrosSeleccionados.estadoNovela;

    return cumpleLectura && cumpleNovela;
  });

  paginaActual = 1;
  mostrarPaginaLecturas();
}

// ================================
// 📄 PAGINACIÓN
// ================================
function mostrarPaginaLecturas() {
  const todas = Array.from(document.querySelectorAll("#contenedor-mis-lecturas .card"));
  const visibles = listaFiltrada.length ? listaFiltrada : todas;

  todas.forEach(card => card.style.display = "none");

  if (mostrarTodoActivo) {
    visibles.forEach(card => card.style.display = "block");
    generarPaginacionLecturas(visibles.length);
    return;
  }

  const inicio = (paginaActual - 1) * tarjetasPorPagina;
  const fin = inicio + tarjetasPorPagina;

  visibles.forEach((card, index) => {
    if (index >= inicio && index < fin) {
      card.style.display = "block";
    }
  });

  generarPaginacionLecturas(visibles.length);
}

// ================================
// 🔢 BOTONES PAGINACIÓN
// ================================
function generarPaginacionLecturas(total) {
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

    btn.addEventListener("click", () => {
      paginaActual = i;
      mostrarPaginaLecturas();
    });

    contenedor.appendChild(btn);
  }
}
