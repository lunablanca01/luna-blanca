/* ================================
   🧱 1. CARGAR TARJETAS
================================ */
document.getElementById("contenedor-tarjetas").innerHTML = tarjetasHTML;


/* ================================
   🔤 2. LIMPIAR TEXTO PARA ORDEN
================================ */
function limpiarTextoOrden(texto){
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
const cards = document.querySelectorAll(".card");
const filtros = ['tipo','estado','ambientado','categoria','inicial','autor'];

let paginaActual = 1;
let tarjetasPorPagina = 24;
let mostrarTodoActivo = false;
let modoOrden = "az";

// 🔥 ORDEN ORIGINAL
let ordenOriginal = [];


/* ================================
   🔤 4. ORDENAR TARJETAS
================================ */
function ordenarTarjetas(){

  const contenedor = document.querySelector(".grid");
  const tarjetas = Array.from(contenedor.querySelectorAll(".card"));

  tarjetas.sort((a, b) => {

    if(modoOrden === "az"){
      const tituloA = limpiarTextoOrden(a.querySelector("h3").textContent);
      const tituloB = limpiarTextoOrden(b.querySelector("h3").textContent);
      return tituloA.localeCompare(tituloB);
    }

    if(modoOrden === "update"){
      return ordenOriginal.indexOf(b) - ordenOriginal.indexOf(a);
    }

    return 0;
  });

  tarjetas.forEach(card => contenedor.appendChild(card));

  paginaActual = 1;
  mostrarPagina();
}


/* ================================
   📄 5. PAGINACIÓN
================================ */
// 🔥 calcular tarjetas según columnas reales del grid
function calcularTarjetasPorPagina(){

  const grid = document.querySelector(".grid");
  if(!grid) return 12;

  const estilos = window.getComputedStyle(grid);

  // cuenta columnas reales del CSS grid
  const columnas = estilos.gridTemplateColumns.split(" ").length;

  let filas;

  if(window.innerWidth < 600){
    filas = 5; // móvil
  } else if(window.innerWidth < 900){
    filas = 4; // tablet
  } else {
    filas = 3; // desktop
  }

  return columnas * filas;
}


function mostrarPagina(){

  // 🔥 calcular dinámicamente
  tarjetasPorPagina = calcularTarjetasPorPagina();

  const todas = Array.from(document.querySelectorAll(".card"));
  const visibles = todas.filter(card => card.dataset.visible !== "0");

  todas.forEach(card => card.style.display = "none");

  if(mostrarTodoActivo){
    visibles.forEach(card => card.style.display = "block");
    generarPaginacion(visibles.length);
    return;
  }

  const inicio = (paginaActual - 1) * tarjetasPorPagina;
  const fin = inicio + tarjetasPorPagina;

  visibles.forEach((card, index) => {
    if(index >= inicio && index < fin){
      card.style.display = "block";
    }
  });

  generarPaginacion(visibles.length);
}


function generarPaginacion(total){

  const contenedor = document.getElementById("paginacion");
  if(!contenedor) return;

  contenedor.innerHTML = "";

  if(mostrarTodoActivo) return;

  const totalPaginas = Math.ceil(total / tarjetasPorPagina);

  if(totalPaginas <= 1) return;

  const rango = 1;

  // ← anterior
  if(paginaActual > 1){
    const btnPrev = document.createElement("button");
    btnPrev.textContent = "«";
    btnPrev.addEventListener("click", () => {
      paginaActual--;
      mostrarPagina();
    });
    contenedor.appendChild(btnPrev);
  }

  function crearBoton(pagina){
    const btn = document.createElement("button");
    btn.textContent = pagina;

    if(pagina === paginaActual){
      btn.classList.add("activo");
    }

    btn.addEventListener("click", () => {
      paginaActual = pagina;
      mostrarPagina();
    });

    contenedor.appendChild(btn);
  }

  // primera
  crearBoton(1);

  // ...
  if(paginaActual > 3){
    const span = document.createElement("span");
    span.textContent = "...";
    contenedor.appendChild(span);
  }

  const inicio = Math.max(2, paginaActual - rango);
  const fin = Math.min(totalPaginas - 1, paginaActual + rango);

  for(let i = inicio; i <= fin; i++){
    crearBoton(i);
  }

  // ...
  if(paginaActual < totalPaginas - 2){
    const span = document.createElement("span");
    span.textContent = "...";
    contenedor.appendChild(span);
  }

  // última
  if(totalPaginas > 1){
    crearBoton(totalPaginas);
  }

  // siguiente →
  if(paginaActual < totalPaginas){
    const btnNext = document.createElement("button");
    btnNext.textContent = "»";
    btnNext.addEventListener("click", () => {
      paginaActual++;
      mostrarPagina();
    });
    contenedor.appendChild(btnNext);
  }
}


// 🔥 recalcular si cambia el tamaño de pantalla
window.addEventListener("resize", () => {
  mostrarPagina();
});


/* ================================
   🔎 6. APLICAR FILTROS
================================ */
function aplicarFiltros(){

  const texto = buscador.value.toLowerCase();
  let seleccionados = {};

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input:checked`);
    seleccionados[filtro] = Array.from(checks).map(c => c.value);
  });

  cards.forEach(card => {

    const titulo = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();

    const coincideTexto = titulo.includes(texto);

    let coincideFiltros = filtros.every(filtro => {

      if(seleccionados[filtro].length === 0) return true;

      if(filtro === "inicial"){
        const inicialTitulo = limpiarTextoOrden(titulo).charAt(0);
        return seleccionados[filtro].includes(inicialTitulo);
      }

      if(filtro === "categoria"){
        return seleccionados[filtro].every(tag => tags.includes(tag));
      }

      return seleccionados[filtro].some(tag => tags.includes(tag));

    });

    const visible = (coincideTexto && coincideFiltros);
    card.dataset.visible = visible ? "1" : "0";

  });

  document.querySelectorAll('.dropdownContenido').forEach(d => {
    d.style.display = 'none';
  });

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

  paginaActual = 1;
  mostrarTodoActivo = false;

  ordenarTarjetas();
}


/* ================================
   🧹 7. LIMPIAR FILTROS
================================ */
function limpiarFiltros(){
  buscador.value = "";

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input`);
    checks.forEach(c => c.checked = false);
  });

  cards.forEach(card => card.dataset.visible = "1");
  document.getElementById("filtros-activos").textContent = "";

  paginaActual = 1;
  mostrarTodoActivo = false;

  ordenarTarjetas();
}


/* ================================
   ⌨️ 8. BUSCADOR
================================ */
buscador.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    aplicarFiltros();
  }
});

function buscarTexto() {
  aplicarFiltros();
}


/* ================================
   🔽 9. DROPDOWNS FILTROS
================================ */
function toggleDropdown(id, boton){

  const lista = document.getElementById("dropdown-" + id);
  const todosDropdowns = document.querySelectorAll('.dropdownContenido');
  const todosBotones = document.querySelectorAll('.dropdownBtn');

  todosDropdowns.forEach(d => {
    if(d !== lista) d.style.display = 'none';
  });

  todosBotones.forEach(b => b.classList.remove("activo"));

  if(lista.style.display === "block"){
    lista.style.display = "none";
  } else {
    lista.style.display = "block";
    boton.classList.add("activo");
  }
}


/* ================================
   🔽 10. ORDENAR DROPDOWN
================================ */
const btnOrdenar = document.getElementById("btn-ordenar");
const dropdownOrden = document.getElementById("dropdown-orden");

if(btnOrdenar){
  btnOrdenar.addEventListener("click", () => {
    dropdownOrden.classList.toggle("activo");
  });
}

document.querySelectorAll("#dropdown-orden button").forEach(btn => {
  btn.addEventListener("click", () => {
    aplicarOrden(btn.dataset.orden);
  });
});

function aplicarOrden(tipo){
  modoOrden = tipo;
  ordenarTarjetas();
  dropdownOrden.classList.remove("activo");
}


/* ================================
   📄 11. BOTÓN MOSTRAR TODO
================================ */
const btnMostrarTodo = document.getElementById("mostrar-todo");

if(btnMostrarTodo){
  btnMostrarTodo.addEventListener("click", () => {

    mostrarTodoActivo = !mostrarTodoActivo;

    btnMostrarTodo.textContent = mostrarTodoActivo
      ? "Paginado"
      : "Mostrar todo";

    mostrarPagina();
  });
}


/* ================================
   🔗 12. FILTROS DESDE URL
================================ */
function aplicarFiltrosDesdeURL(){

  const params = new URLSearchParams(window.location.search);

  ['tipo','estado','ambientado','categoria','inicial'].forEach(filtro => {
    if(params.has(filtro)){
      const valor = params.get(filtro);
      const checkbox = document.querySelector(`#dropdown-${filtro} input[value="${valor}"]`);
      if(checkbox){
        checkbox.checked = true;
      }
    }
  });

  aplicarFiltros();
}


/* ================================
   🧩 13. GENERAR DROPDOWNS
================================ */
function generarDropdown(idFiltro, objetoTags){

  const contenedor = document.getElementById("dropdown-" + idFiltro);
  if(!contenedor) return;

  contenedor.innerHTML = "";

  Object.keys(objetoTags).forEach(key => {
    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${key}"> ${objetoTags[key]}
    `;

    contenedor.appendChild(label);
  });

}


/* ================================
   🚀 14. INICIALIZACIÓN
================================ */
window.addEventListener("load", function(){

  generarDropdown("categoria", tags.categoria);
  generarDropdown("ambientado", tags.ambientado);
  generarDropdown("tipo", tags.tipo);
  generarDropdown("estado", tags.estado);

  document.querySelectorAll(".card").forEach(card => {
    card.dataset.visible = "1";
  });

  // 🔥 GUARDAR ORDEN ORIGINAL
  ordenOriginal = Array.from(document.querySelectorAll(".card"));

  aplicarFiltrosDesdeURL();

  // 🔥 FORZAR ALFABÉTICO AL INICIO
  modoOrden = "az";
  ordenarTarjetas();
});


/* ================================
   🖱️ 15. CERRAR DROPDOWNS
================================ */
document.addEventListener("click", function(e){

  if(!e.target.closest(".dropdown")){
    document.querySelectorAll(".dropdownContenido")
      .forEach(d => d.style.display = "none");

    document.querySelectorAll(".dropdownBtn")
      .forEach(b => b.classList.remove("activo"));
  }

  if(!e.target.closest(".ordenar")){
    dropdownOrden?.classList.remove("activo");
  }

});


/* ================================
   📱 16. PANEL FILTROS
================================ */
function togglePanelFiltros(){
  const panel = document.querySelector(".panel-filtros");
  const categorias = document.querySelector(".panel-categorias");

  panel.classList.toggle("activo");
  if(categorias) categorias.classList.remove("activo");
}

function togglePanelCategorias(){
  const panel = document.querySelector(".panel-categorias");
  const filtros = document.querySelector(".panel-filtros");

  panel.classList.toggle("activo");
  if(filtros) filtros.classList.remove("activo");
}


/* ================================
   ⬆️ 17. SCROLL TOP
================================ */
window.addEventListener("scroll", function(){

  const scrollTopBtn = document.getElementById("scrollTop");

  if (window.scrollY > 200){
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

});
