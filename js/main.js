/* ================================
   🧱 1. CARGAR TARJETAS
================================ */
document.getElementById("contenedor-tarjetas").innerHTML = tarjetasHTML;


/* ================================
   🔤 2. LIMPIAR TEXTO PARA ORDEN
================================ */
function limpiarTextoOrden(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^[¡!¿?\s]+/, "")
    .trim();
}


/* ================================
   🔥 CALCULAR TARJETAS
================================ */
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


/* ================================
   🔎 3. VARIABLES GLOBALES
================================ */
const buscador = document.getElementById("buscador");
const filtros = ['tipo','estado','ambientado','categoria','inicial','autor'];

let paginaActual = 1;
let tarjetasPorPagina = calcularTarjetasPorPagina(); // dinámico
let mostrarTodoActivo = false;
let modoOrden = "az";
let bloqueandoURL = true;

let cargandoDesdeURL = true;
let ordenOriginal = [];
let listaFiltrada = [];


/* ================================
   📱 RESPONSIVE PAGINACIÓN
================================ */
window.addEventListener("resize", () => {
  const nuevoValor = calcularTarjetasPorPagina();

  if (nuevoValor !== tarjetasPorPagina) {
    tarjetasPorPagina = nuevoValor;
    paginaActual = 1;
    mostrarPagina();
  }
});


/* ================================
   🔤 4. FILTROS ACTIVOS
================================ */
function hayFiltrosActivos() {
  const params = new URLSearchParams(window.location.search);

  for (let f of filtros) {
    if (params.has(f)) return true;
  }

  if (buscador.value.trim() !== "") return true;

  return false;
}


/* ================================
   🔤 5. ORDENAR TARJETAS
================================ */
function ordenarTarjetas() {
  const contenedor = document.querySelector(".grid");
  const tarjetas = Array.from(contenedor.querySelectorAll(".card"));

  tarjetas.sort((a, b) => {
    if (modoOrden === "az") {
      const tituloA = limpiarTextoOrden(a.querySelector("h3").textContent);
      const tituloB = limpiarTextoOrden(b.querySelector("h3").textContent);
      return tituloA.localeCompare(tituloB);
    }
    if (modoOrden === "update") {
      return ordenOriginal.indexOf(a) - ordenOriginal.indexOf(b);
    }
    return 0;
  });

  tarjetas.forEach(card => contenedor.appendChild(card));

  paginaActual = 1;
  mostrarPagina();
}


/* ================================
   📄 6. PAGINACIÓN
================================ */
function mostrarPagina() {

  const todas = Array.from(document.querySelectorAll(".card"));
  const visibles = hayFiltrosActivos() ? listaFiltrada : todas;

  todas.forEach(card => card.style.display = "none");

  const hayFiltros = visibles.length !== todas.length;

  if (mostrarTodoActivo && !hayFiltros) {
    visibles.forEach(card => card.style.display = "block");
    generarPaginacion(visibles.length);
    return;
  }

  const totalPaginas = Math.ceil(visibles.length / tarjetasPorPagina);
  if (paginaActual > totalPaginas) {
    paginaActual = totalPaginas || 1;
  }

  const inicio = (paginaActual - 1) * tarjetasPorPagina;
  const fin = inicio + tarjetasPorPagina;

  visibles.forEach((card, index) => {
    if (index >= inicio && index < fin) card.style.display = "block";
  });

  guardarPaginaURL();
  generarPaginacion(visibles.length);
}


function generarPaginacion(total) {

  const contenedor = document.getElementById("paginacion");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  if (mostrarTodoActivo) return;

  const totalPaginas = Math.ceil(total / tarjetasPorPagina);
  if (totalPaginas <= 1) return;

  const rango = 1;

  if (paginaActual > 1) {
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "«";
    btnPrev.addEventListener("click", () => {
      paginaActual--;
      mostrarPagina();
    });
    contenedor.appendChild(btnPrev);
  }

  function crearBoton(pagina) {
    const btn = document.createElement("button");
    btn.textContent = pagina;
    if (pagina === paginaActual) btn.classList.add("activo");
    btn.addEventListener("click", () => {
      paginaActual = pagina;
      mostrarPagina();
    });
    contenedor.appendChild(btn);
  }

  crearBoton(1);

  if (paginaActual > 3) {
    const span = document.createElement("span");
    span.textContent = "...";
    contenedor.appendChild(span);
  }

  const inicio = Math.max(2, paginaActual - rango);
  const fin = Math.min(totalPaginas - 1, paginaActual + rango);

  for (let i = inicio; i <= fin; i++) crearBoton(i);

  if (paginaActual < totalPaginas - 2) {
    const span = document.createElement("span");
    span.textContent = "...";
    contenedor.appendChild(span);
  }

  if (totalPaginas > 1) crearBoton(totalPaginas);

  if (paginaActual < totalPaginas) {
    const btnNext = document.createElement("button");
    btnNext.textContent = "»";
    btnNext.addEventListener("click", () => {
      paginaActual++;
      mostrarPagina();
    });
    contenedor.appendChild(btnNext);
  }
}


/* ================================
   🚀 16. INICIALIZACIÓN
================================ */
window.addEventListener("load", function() {

  // 🔥 asegurar cálculo correcto al iniciar
  tarjetasPorPagina = calcularTarjetasPorPagina();

  generarDropdown("categoria", tags.categoria);
  generarDropdown("ambientado", tags.ambientado);
  generarDropdown("tipo", tags.tipo);
  generarDropdown("estado", tags.estado);

  document.querySelectorAll(".card").forEach(card => card.dataset.visible = "1");

  ordenOriginal = Array.from(document.querySelectorAll(".card"));
  modoOrden = "az";

  ordenarTarjetas();
  aplicarFiltrosDesdeURL();

  cargandoDesdeURL = false;

  const params = new URLSearchParams(window.location.search);
  const paginaURL = parseInt(params.get("pagina"));
  if (paginaURL && paginaURL > 0) paginaActual = paginaURL;

  bloqueandoURL = false;
  mostrarPagina();
});
