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
   🔎 3. VARIABLES GLOBALES
================================ */
const buscador = document.getElementById("buscador");
const filtros = ['tipo','estado','ambientado','categoria','inicial','autor'];

let paginaActual = 1;
let tarjetasPorPagina = 21; // ahora dinámico
let mostrarTodoActivo = false;
let modoOrden = "az";
let bloqueandoURL = true;

let cargandoDesdeURL = true;
let ordenOriginal = [];
let listaFiltrada = [];


/* ================================
   🧠 NUEVO: CALCULAR TARJETAS DINÁMICAS
================================ */
function calcularTarjetasPorPagina() {
  const contenedor = document.querySelector(".grid");
  const tarjetas = contenedor.querySelectorAll(".card");

  if (tarjetas.length === 0) return 21;

  let primeraFilaTop = tarjetas[0].offsetTop;
  let columnas = 0;

  for (let tarjeta of tarjetas) {
    if (tarjeta.offsetTop !== primeraFilaTop) break;
    columnas++;
  }

  const rect = contenedor.getBoundingClientRect();
  const altoDisponible = window.innerHeight - rect.top;

  const altoTarjeta = tarjetas[0].offsetHeight + 12;

  let filas = Math.floor(altoDisponible / altoTarjeta);
  if (filas < 1) filas = 1;

  return columnas * filas;
}


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

  tarjetasPorPagina = calcularTarjetasPorPagina(); // 🔥 clave

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
    btnPrev.onclick = () => { paginaActual--; mostrarPagina(); };
    contenedor.appendChild(btnPrev);
  }

  function crearBoton(pagina) {
    const btn = document.createElement("button");
    btn.textContent = pagina;
    if (pagina === paginaActual) btn.classList.add("activo");
    btn.onclick = () => { paginaActual = pagina; mostrarPagina(); };
    contenedor.appendChild(btn);
  }

  crearBoton(1);

  if (paginaActual > 3) contenedor.appendChild(document.createTextNode("..."));

  const inicio = Math.max(2, paginaActual - rango);
  const fin = Math.min(totalPaginas - 1, paginaActual + rango);

  for (let i = inicio; i <= fin; i++) crearBoton(i);

  if (paginaActual < totalPaginas - 2) contenedor.appendChild(document.createTextNode("..."));

  if (totalPaginas > 1) crearBoton(totalPaginas);

  if (paginaActual < totalPaginas) {
    const btnNext = document.createElement("button");
    btnNext.textContent = "»";
    btnNext.onclick = () => { paginaActual++; mostrarPagina(); };
    contenedor.appendChild(btnNext);
  }
}


/* ================================
   🔗 URL PAGINACIÓN
================================ */
function guardarPaginaURL() {
  if (bloqueandoURL || cargandoDesdeURL) return;

  const params = new URLSearchParams(window.location.search);
  params.set("pagina", paginaActual);

  const query = params.toString();
  const nuevaURL = query ? "?" + query : window.location.pathname;

  window.history.pushState({}, "", nuevaURL);
}


/* ================================
   🔄 NUEVO: RESIZE
================================ */
window.addEventListener("resize", () => {
  const nuevo = calcularTarjetasPorPagina();

  if (nuevo !== tarjetasPorPagina) {
    tarjetasPorPagina = nuevo;
    mostrarPagina();
  }
});
