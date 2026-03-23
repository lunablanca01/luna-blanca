/* ================================
   🧱 1. PROTEGER PAGINA
================================ */
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qaophiaogsvhkgmbfcuf.supabase.co",
  "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
);

// 🔒 PROTEGER PÁGINA
export async function protegerPagina() {
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    // ❌ NO está logueado → lo mandamos al login
    window.location.href = "/luna-blanca/index.html";
  }
}



/* ================================
   🧱 1. CARGAR TARJETAS
================================ */
document.getElementById("contenedor-tarjetas").innerHTML = tarjetasHTML;


/* ================================
   🏷️ 2. CREAR ETIQUETAS DE ESTADO
================================ */
document.querySelectorAll(".card").forEach(card => {

  const tags = (card.dataset.tags || "").toLowerCase();
  let estadoTexto = "";
  let estadoClase = "";

  if(tags.includes("finalizado")){
    estadoTexto = "Finalizado";
    estadoClase = "estado-finalizado";
  }

  if(tags.includes("en-proceso")){
    estadoTexto = "En proceso";
    estadoClase = "estado-proceso";
  }

  if(tags.includes("mtl")){
    estadoTexto = "MTL";
    estadoClase = "estado-mtl";
  }

  if(tags.includes("pendiente")){
    estadoTexto = "Pendiente";
    estadoClase = "estado-pendiente";
  }

  if(estadoTexto){
    const etiqueta = `<div class="estado ${estadoClase}">${estadoTexto}</div>`;
    card.insertAdjacentHTML("afterbegin", etiqueta);
  }

});


/* ================================
   🔤 3. LIMPIAR TEXTO PARA ORDEN
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
   🔤 4. ORDENAR TARJETAS
================================ */
function ordenarTarjetas(){
  const contenedor = document.querySelector(".grid");
  const tarjetas = Array.from(contenedor.querySelectorAll(".card"));

  tarjetas.sort((a, b) => {
    const tituloA = limpiarTextoOrden(a.querySelector("h3").textContent);
    const tituloB = limpiarTextoOrden(b.querySelector("h3").textContent);
    return tituloA.localeCompare(tituloB);
  });

  tarjetas.forEach(card => contenedor.appendChild(card));
}


/* ================================
   🔽 5. DROPDOWNS (ABRIR/CERRAR)
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
   🔎 6. VARIABLES GLOBALES
================================ */
const buscador = document.getElementById("buscador");
const cards = document.querySelectorAll(".card");
const filtros = ['tipo','estado','ambientado','categoria','inicial','autor'];


/* ================================
   🔎 7. APLICAR FILTROS
================================ */
function aplicarFiltros(){

  const texto = buscador.value.toLowerCase();
  let seleccionados = {};

  // obtener checkboxes seleccionados
  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input:checked`);
    seleccionados[filtro] = Array.from(checks).map(c => c.value);
  });

  // evaluar tarjetas
  cards.forEach(card => {

    const titulo = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();

    const coincideTexto = titulo.includes(texto);

    let coincideFiltros = filtros.every(filtro => {

      if(seleccionados[filtro].length === 0) return true;

      // 🔤 filtro por inicial
      if(filtro === "inicial"){
        const inicialTitulo = limpiarTextoOrden(titulo).charAt(0);
        return seleccionados[filtro].includes(inicialTitulo);
      }

      // 📂 categoria → debe cumplir TODAS
      if(filtro === "categoria"){
        return seleccionados[filtro].every(tag => tags.includes(tag));
      }

      // 📌 otros filtros → cualquiera
      return seleccionados[filtro].some(tag => tags.includes(tag));

    });

    card.style.display = (coincideTexto && coincideFiltros) ? "block" : "none";

  });

  // cerrar dropdowns
  document.querySelectorAll('.dropdownContenido').forEach(d => {
    d.style.display = 'none';
  });

  /* ================================
     🧾 MOSTRAR FILTROS ACTIVOS
  ================================= */
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

}


/* ================================
   🧹 8. LIMPIAR FILTROS
================================ */
function limpiarFiltros(){
  buscador.value = "";

  filtros.forEach(filtro => {
    const checks = document.querySelectorAll(`#dropdown-${filtro} input`);
    checks.forEach(c => c.checked = false);
  });

  cards.forEach(card => card.style.display = "block");
  document.getElementById("filtros-activos").textContent = "";
}


/* ================================
   ⌨️ 9. BUSCAR CON ENTER
================================ */
buscador.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    aplicarFiltros();
  }
});

// 🔹 Función para el botón Buscar
function buscarTexto() {
  aplicarFiltros();
}


/* ================================
   🔗 10. FILTROS DESDE URL
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

  // ⭐ filtro especial autor
  if(params.has("autor")){
    const autor = params.get("autor").toLowerCase();

    cards.forEach(card => {
      const autorCard = card.dataset.autor?.toLowerCase() || "";
      if(autorCard !== autor){
        card.style.display = "none";
      }
    });

    return;
  }

  aplicarFiltros();
}


/* ================================
   🧩 11. GENERAR DROPDOWNS
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
   🚀 12. INICIALIZACIÓN
================================ */
window.addEventListener("load", function(){

  generarDropdown("categoria", tags.categoria);
  generarDropdown("ambientado", tags.ambientado);
  generarDropdown("tipo", tags.tipo);
  generarDropdown("estado", tags.estado);

  aplicarFiltrosDesdeURL();
  ordenarTarjetas();

});


/* ================================
   🖱️ 13. CERRAR DROPDOWNS
================================ */
document.addEventListener("click", function(e){

  if(!e.target.closest(".dropdown")){

    document.querySelectorAll(".dropdownContenido")
      .forEach(d => d.style.display = "none");

    document.querySelectorAll(".dropdownBtn")
      .forEach(b => b.classList.remove("activo"));

  }

});


/* ================================
   📱 14. PANEL FILTROS (MÓVIL)
================================ */
function togglePanelFiltros(){
  document.querySelector(".panel-filtros").classList.toggle("activo");
}


/* ================================
   ⬆️ 15. BOTÓN SCROLL TOP
================================ */
window.addEventListener("scroll", function(){

  const scrollTopBtn = document.getElementById("scrollTop");

  if (window.scrollY > 200){
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

});


/* ================================
   ⬆️ 16. DESCARGAR EXCEL
================================ */
function descargarExcel(){

  const lista = (typeof novelasFiltradas !== "undefined" && novelasFiltradas.length)
    ? novelasFiltradas
    : novelas;

  let contenido = "Titulo\n";

  lista.forEach(n => {
    const titulo = (n.titulo || "").replace(/"/g, '""');
    contenido += `"${titulo}"\n`;
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

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("descargar");

  if(link){
    link.addEventListener("click", function(e){
      e.preventDefault();
      descargarExcel();
    });
  }
});
