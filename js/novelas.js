/* ================================
   🏷️ 0. ESTADO DE NOVELAS CON SUPERBASE
================================ */

import { supabase } from "./auth.js";

document.addEventListener("DOMContentLoaded", async () => {

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const titulo = document.querySelector("h1")?.textContent.trim();

  if (!selectEstado || !inputProgreso || !titulo) return;

  // 🔹 CARGAR datos guardados
  const { data } = await supabase
    .from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", titulo)
    .maybeSingle();

  if (data) {
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso;
  }

  // 🔹 GUARDAR estado
  selectEstado.addEventListener("change", async () => {
    await supabase.from("lecturas").upsert({
      usuario_id: user.id,
      novela: titulo,
      estado: selectEstado.value,
      progreso: parseInt(inputProgreso.value)
    });
  });

  // 🔹 GUARDAR progreso
  inputProgreso.addEventListener("change", async () => {
    await supabase.from("lecturas").upsert({
      usuario_id: user.id,
      novela: titulo,
      estado: selectEstado.value,
      progreso: parseInt(inputProgreso.value)
    });
  });

});

/* ================================
   🏷️ 1. APLICAR ESTADOS A TARJETAS
================================ */
function aplicarEstados(contenedor){
  const cards = contenedor.querySelectorAll(".card");
  cards.forEach(card => {
    if(card.querySelector(".estado")) return;

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
}

/* ================================
   🧼 2. LIMPIAR TEXTO
================================ */
function limpiarTexto(texto){
  return texto.toLowerCase().replace(/[\s_]+/g," ").trim();
}

/* ================================
   👤 3. MOSTRAR MÁS DEL MISMO AUTOR
================================ */
function mostrarPorAutor(autorBuscado, bloqueId){
  const bloque = document.getElementById(bloqueId);
  if(!bloque) return;

  const titulo = bloque.querySelector("h2");
  const contenedor = bloque.querySelector(".grid");
  if(!contenedor || !titulo) return;

  const tituloActualElem = document.querySelector("h1");
  const tituloActual = tituloActualElem ? tituloActualElem.innerText.trim() : "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = Array.from(doc.querySelectorAll(".card"));

  const tarjetasDelAutor = cards.filter(card => {
    const autor = card.dataset.autor?.toLowerCase();
    const h3 = card.querySelector("h3");
    const tituloCard = h3 ? h3.innerText.trim() : "";
    return autor === autorBuscado.toLowerCase() && tituloCard !== tituloActual;
  });

  if(tarjetasDelAutor.length > 0){
    titulo.style.display = "block";
    contenedor.innerHTML = "";
    tarjetasDelAutor.forEach(card => {
      const clon = card.cloneNode(true);
      contenedor.appendChild(clon);
    });
    aplicarEstados(contenedor);
  } else {
    bloque.style.display = "none";
  }
}

/* ================================
   🏷️ 4. OBTENER NOMBRE DE TAG
================================ */
function obtenerNombreTag(valor){
  for (let grupo in tags){
    if(tags[grupo][valor]){
      return tags[grupo][valor];
    }
  }
  return valor;
}

/* ================================
   📋 5. MOSTRAR ETIQUETAS DE LA NOVELA
================================ */
document.addEventListener("DOMContentLoaded", function () {
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  if (!tituloActual) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = doc.querySelectorAll(".card");

  let tarjetaCoincidente = null;
  cards.forEach(card => {
    const nombreCard = card.querySelector("h3")?.textContent.trim();
    if (nombreCard === tituloActual){
      tarjetaCoincidente = card;
    }
  });

  if (!tarjetaCoincidente) return;

  // 🔹 Generar etiquetas
  const tagsEncontrados = tarjetaCoincidente.dataset.tags;
  if(tagsEncontrados){
    const tagsArray = tagsEncontrados.toLowerCase().split(" ");
    const tipo = tagsArray[0] || "";
    const estado = tagsArray[1] || "";
    const ambientado = tagsArray[2] || "";
    const categorias = tagsArray.slice(3);
    const contenedor = document.querySelector(".etiquetas");
    if(contenedor){
      contenedor.innerHTML = `
        <span>Tipo:
          <a href="../luna-blanca.html?tipo=${tipo}">
            ${obtenerNombreTag(tipo)}
          </a>
        </span>
        <span>Estado:
          <a href="../luna-blanca.html?estado=${estado}">
            ${obtenerNombreTag(estado)}
          </a>
        </span>
        <span>Ambientado:
          <a href="../luna-blanca.html?ambientado=${ambientado}">
            ${obtenerNombreTag(ambientado)}
          </a>
        </span>
        <br>
        <div class="lista-etiquetas">
          Etiqueta:
          ${categorias.map(cat =>
            `<a href="../luna-blanca.html?categoria=${cat}">
              ${obtenerNombreTag(cat)}
            </a>`).join("")}
        </div>
      `;
    }
  }

  // 🔹 Generar div de ePub
  const linkEpub = tarjetaCoincidente.querySelector(".links-tarjeta a")?.href;
  if(linkEpub){
    const contenedorEpub = document.getElementById("epub-container");
    if(contenedorEpub){
      contenedorEpub.innerHTML = `
        <div class="epub">
          Leer en: <a href="${linkEpub}" target="_blank">ePub</a>
        </div>
      `;
    }
  }

});

/* ================================
   👤 6. CARGAR AUTOR
================================ */
function cargarAutor(){
  const titulo = document.querySelector("h1")?.textContent.trim();
  if(!titulo) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = doc.querySelectorAll(".card");

  cards.forEach(card => {
    const nombreCard = card.querySelector("h3")?.textContent.trim();
    if(nombreCard === titulo){
      const autor = card.dataset.autor;
      const autorNombre = autor
        .split("-")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

      document.querySelector(".autor").innerHTML =
        `Autor: <a href="../luna-blanca.html?autor=${autor}">${autorNombre}</a>`;

      // ⭐ cargar también relacionados
      mostrarPorAutor(autor, "bloque-autor");
    }
  });
}

// ejecutar
cargarAutor();


/* ================================
   👤 7. OBTENER CAPÍTULOS
================================ */
// 🔹 OBTENER CAPÍTULOS DESDE EL HTML (incluyendo extras)
const capElem = document.querySelector(".capitulos");

if(capElem){
  const texto = capElem.textContent;

  // Extrae TODOS los números (ej: "122 + 4 extras" → [122, 4])
  const numeros = texto.match(/\d+/g);

  if(numeros){
    // Suma todos los números
    const totalCap = numeros.reduce((acc, num) => acc + parseInt(num), 0);

    // Mostrar en el HTML
    document.getElementById("total-capitulos").textContent = totalCap;

    // Limitar el input
    const inputProgreso = document.getElementById("progreso-capitulo");
    inputProgreso.max = totalCap;
  }
}
