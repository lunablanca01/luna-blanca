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
let tarjetasPorPagina = calcularTarjetasPorPagina();
let mostrarTodoActivo = false;
let modoOrden = "az";
let bloqueandoURL = true;

let cargandoDesdeURL = true;
let ordenOriginal = [];
let listaFiltrada = [];


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
   🔗 7. URL PAGINACIÓN
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
   🔎 8. APLICAR FILTROS
================================ */
function aplicarFiltros() {

  const texto = buscador.value.toLowerCase();
  let seleccionados = {};

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input:checked`);
    seleccionados[filtro] = Array.from(checks).map(c => c.value);
  });

  listaFiltrada = [];

  document.querySelectorAll(".card").forEach(card => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();

    const coincideTexto = titulo.includes(texto);

    const coincideFiltros = filtros.every(filtro => {
      if (seleccionados[filtro].length === 0) return true;

      if (filtro === "inicial") {
        const inicialTitulo = limpiarTextoOrden(titulo).charAt(0);
        return seleccionados[filtro].includes(inicialTitulo);
      }

      if (filtro === "categoria") {
        return seleccionados[filtro].some(tag => tags.includes(tag));
      }

      return seleccionados[filtro].some(tag => tags.includes(tag));
    });

    if (coincideTexto && coincideFiltros) listaFiltrada.push(card);
  });

  document.querySelectorAll('.dropdownContenido').forEach(d => d.style.display = 'none');

  let listaFiltros = [];
  Object.values(seleccionados).forEach(arr => {
    arr.forEach(tag => {
      let bonito = tag.replace(/-/g, " ");
      bonito = bonito.charAt(0).toUpperCase() + bonito.slice(1);
      listaFiltros.push(bonito);
    });
  });

  document.getElementById("filtros-activos").textContent =
    listaFiltros.length ? "Filtros activos: " + listaFiltros.join(", ") : "";

  if (!cargandoDesdeURL) paginaActual = 1;
  mostrarTodoActivo = false;
  guardarFiltrosURL();
  if (!cargandoDesdeURL) mostrarPagina();
}


/* ================================
   🧹 9. LIMPIAR FILTROS
================================ */
function limpiarFiltros() {
  cargandoDesdeURL = true;

  buscador.value = "";
  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input`);
    checks.forEach(c => c.checked = false);
  });

  document.getElementById("filtros-activos").textContent = "";

  paginaActual = 1;
  mostrarTodoActivo = false;

  window.history.pushState({}, "", window.location.pathname);

  cargandoDesdeURL = false;
  ordenarTarjetas();
  listaFiltrada = [];
}


/* ================================
   ⌨️ 10. BUSCADOR
================================ */
buscador.addEventListener("keydown", function(event) {
  if (event.key === "Enter") aplicarFiltros();
});

function buscarTexto() { aplicarFiltros(); }


/* ================================
   🔽 11. DROPDOWNS FILTROS
================================ */
function toggleDropdown(id, boton) {
  const lista = document.getElementById("dropdown-" + id);
  const todosDropdowns = document.querySelectorAll('.dropdownContenido');
  const todosBotones = document.querySelectorAll('.dropdownBtn');

  todosDropdowns.forEach(d => { if (d !== lista) d.style.display = 'none'; });
  todosBotones.forEach(b => b.classList.remove("activo"));

  if (lista.style.display === "block") {
    lista.style.display = "none";
  } else {
    lista.style.display = "block";
    boton.classList.add("activo");
  }
}


/* ================================
   🔽 12. ORDENAR DROPDOWN
================================ */
const btnOrdenar = document.getElementById("btn-ordenar");
const dropdownOrden = document.getElementById("dropdown-orden");

if (btnOrdenar) {
  btnOrdenar.addEventListener("click", () => {
    dropdownOrden.classList.toggle("activo");
  });
}

document.querySelectorAll("#dropdown-orden button").forEach(btn => {
  btn.addEventListener("click", () => {
    aplicarOrden(btn.dataset.orden);
  });
});

function aplicarOrden(tipo) {
  modoOrden = tipo;
  ordenarTarjetas();
  dropdownOrden.classList.remove("activo");
}


/* ================================
   📄 13. BOTÓN MOSTRAR TODO
================================ */
const btnMostrarTodo = document.getElementById("mostrar-todo");

if (btnMostrarTodo) {
  btnMostrarTodo.addEventListener("click", () => {
    mostrarTodoActivo = !mostrarTodoActivo;
    btnMostrarTodo.textContent = mostrarTodoActivo ? "Paginado" : "Mostrar todo";
    mostrarPagina();
  });
}


/* ================================
   🔗 14. FILTROS DESDE URL
================================ */
function aplicarFiltrosDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  filtros.forEach(filtro => {
    if (params.has(filtro)) {
      const valores = params.get(filtro).split(",");
      valores.forEach(valor => {
        const checkbox = document.querySelector(`#dropdown-${filtro} input[value="${valor}"]`);
        if (checkbox) checkbox.checked = true;
      });
    }
  });
  aplicarFiltros();
}


/* ================================
   🧩 15. GENERAR DROPDOWNS
================================ */
function generarDropdown(idFiltro, objetoTags) {
  const contenedor = document.getElementById("dropdown-" + idFiltro);
  if (!contenedor) return;

  contenedor.innerHTML = "";
  Object.keys(objetoTags).forEach(key => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${key}"> ${objetoTags[key]}`;
    contenedor.appendChild(label);
  });
}


/* ================================
   🚀 16. INICIALIZACIÓN
================================ */
window.addEventListener("load", function() {

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

  // 🔥 BOTÓN DESCARGAR
  const btnDescargar = document.getElementById("btn-descargar");
  if (btnDescargar) {
    btnDescargar.addEventListener("click", descargarExcel);
  }
});


/* ================================
   🖱️ 17. CERRAR DROPDOWNS
================================ */
document.addEventListener("click", function(e) {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdownContenido").forEach(d => d.style.display = "none");
    document.querySelectorAll(".dropdownBtn").forEach(b => b.classList.remove("activo"));
  }
  if (!e.target.closest(".ordenar")) dropdownOrden?.classList.remove("activo");
});


/* ================================
   📱 18. PANEL FILTROS
================================ */
function togglePanelFiltros() {
  const panel = document.querySelector(".panel-filtros");
  const categorias = document.querySelector(".panel-categorias");
  panel.classList.toggle("activo");
  if (categorias) categorias.classList.remove("activo");
}
function togglePanelCategorias() {
  const panel = document.querySelector(".panel-categorias");
  const filtros = document.querySelector(".panel-filtros");
  panel.classList.toggle("activo");
  if (filtros) filtros.classList.remove("activo");
}


/* ================================
   ⬆️ 19. SCROLL TOP
================================ */
window.addEventListener("scroll", function() {
  const scrollTopBtn = document.getElementById("scrollTop");
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});


/* ================================
   ⬅️ 20. POPSTATE
================================ */
window.addEventListener("popstate", () => {
  cargandoDesdeURL = true;

  const params = new URLSearchParams(window.location.search);
  const paginaURL = parseInt(params.get("pagina")) || 1;

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input`);
    checks.forEach(c => c.checked = false);
  });

  buscador.value = "";
  aplicarFiltrosDesdeURL();

  paginaActual = paginaURL;

  cargandoDesdeURL = false;
  mostrarPagina();
});


/* ================================
   🔗 21. GUARDAR FILTROS URL
================================ */
function guardarFiltrosURL() {
  if (cargandoDesdeURL) return;

  const params = new URLSearchParams(window.location.search);
  filtros.forEach(f => params.delete(f));

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input:checked`);
    const valores = Array.from(checks).map(c => c.value);
    if (valores.length) params.set(filtro, valores.join(","));
  });

  params.set("pagina", paginaActual);
  const query = params.toString();
  const nuevaURL = query ? "?" + query : window.location.pathname;
  window.history.pushState({}, "", nuevaURL);
}


/* ================================
   📐 22. RESPONSIVE
================================ */
window.addEventListener("resize", function () {

  const nuevasTarjetas = calcularTarjetasPorPagina();

  if (nuevasTarjetas !== tarjetasPorPagina) {
    tarjetasPorPagina = nuevasTarjetas;
    paginaActual = 1;
    mostrarPagina();
  }

});


/* ================================
   ⬆️ 23. DESCARGAR EXCEL
================================ */
function descargarExcel(){

  const visibles = hayFiltrosActivos() ? listaFiltrada : Array.from(document.querySelectorAll(".card"));

  let contenido = "Titulo\n";

  visibles.forEach(card => {
    const titulo = card.querySelector("h3")?.textContent || "";
    const limpio = titulo.replace(/"/g, '""');
    contenido += `"${limpio}"\n`;
  });

  const blob = new Blob(["\uFEFF" + contenido], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "titulos.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}
