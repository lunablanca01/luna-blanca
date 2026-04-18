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

    if(tags.includes("finalizado")) { estadoTexto="Finalizado"; estadoClase="estado-finalizado"; }
    if(tags.includes("en-proceso")) { estadoTexto="En proceso"; estadoClase="estado-proceso"; }
    if(tags.includes("mtl")) { estadoTexto="MTL"; estadoClase="estado-mtl"; }
    if(tags.includes("pendiente")) { estadoTexto="Pendiente"; estadoClase="estado-pendiente"; }

    if(estadoTexto){
      const etiqueta = `<div class="estado ${estadoClase}">${estadoTexto}</div>`;
      card.insertAdjacentHTML("afterbegin", etiqueta);
    }
  });
}


/* ================================
   👤 2. MOSTRAR MÁS DEL MISMO AUTOR
================================ */
function mostrarPorAutor(autorBuscado, bloqueId){
  const bloque = document.getElementById(bloqueId);
  if(!bloque) return;

  const titulo = bloque.querySelector("h2");
  const contenedor = bloque.querySelector(".grid");
  if(!contenedor || !titulo) return;

  const tituloActual = document.querySelector("h1")?.innerText.trim() || "";

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = Array.from(doc.querySelectorAll(".card"));

  const tarjetasDelAutor = cards.filter(card => {
    const autor = card.dataset.autor?.toLowerCase();
    const tituloCard = card.querySelector("h3")?.innerText.trim() || "";
    return autor === autorBuscado.toLowerCase() && tituloCard !== tituloActual;
  });

  if(tarjetasDelAutor.length > 0){
    titulo.style.display = "block";
    contenedor.innerHTML = "";
    tarjetasDelAutor.forEach(card => contenedor.appendChild(card.cloneNode(true)));
    aplicarEstados(contenedor);
  } else {
    bloque.style.display = "none";
  }
}

/* ================================
   🏷️ 3. OBTENER NOMBRE DE TAG
================================ */
function obtenerNombreTag(valor){
  for (let grupo in tags){
    if(tags[grupo][valor]) return tags[grupo][valor];
  }
  return valor;
}

/* ================================
   📋 4. MOSTRAR ETIQUETAS Y DATOS
================================ */
document.addEventListener("DOMContentLoaded", function () {
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  if (!tituloActual) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = doc.querySelectorAll(".card");

  let tarjetaCoincidente = Array.from(cards).find(card =>
    card.querySelector("h3")?.textContent.trim() === tituloActual
  );
  if(!tarjetaCoincidente) return;

  /* ================================
     🆕 DATOS DE LA NOVELA
  ================================= */

  // IMAGEN
  const img = tarjetaCoincidente.querySelector("img")?.getAttribute("src");
  const portada = document.querySelector(".portada");
  if(img && portada){
    portada.src = img;
  }

  // DATOS DESDE ARRAY
  const novelaData = novelas.find(n => n.titulo === tituloActual);

  if(novelaData){
    // TÍTULO EN INGLÉS
    const subtitulo = document.querySelector(".subtitulo");
    if(subtitulo){
      subtitulo.textContent = novelaData.ingles;
    }

    // CAPÍTULOS
    const capDiv = document.querySelector(".capitulos");
    if(capDiv){
      capDiv.textContent = `Capítulos: ${novelaData.capitulos}`;
    }

    // TOTAL PARA PROGRESO
    const numeros = novelaData.capitulos.match(/\d+/g);
    let total = 0;

    if(numeros){
      total = numeros.reduce((acc, num) => acc + parseInt(num), 0);
    }
    document.getElementById("total-capitulos").textContent = total;

    const input = document.getElementById("progreso-capitulo");
    if(input){
      input.max = total;
    }
  }

  // ETIQUETAS
  const tagsEncontrados = tarjetaCoincidente.dataset.tags;
  if(tagsEncontrados){
    const tagsArray = tagsEncontrados.toLowerCase().split(" ");
    let tipo = "";
    let origen = "";
    let estado = "";
    let ambientado = "";
    let categorias = [];

    tagsArray.forEach(tag => {
      if (tags.tipo[tag]) tipo = tag;
      else if (tags.origen[tag]) origen = tag;
      else if (tags.estado[tag]) estado = tag;
      else if (tags.ambientado[tag]) ambientado = tag;
      else if (tags.categoria[tag]) categorias.push(tag);
    });

    const contenedor = document.querySelector(".etiquetas");
     
    if(contenedor){
      contenedor.innerHTML = `
        <div class="lista-principal">
          <span>Tipo de relación: <a href="../luna-blanca.html?tipo=${tipo}">${obtenerNombreTag(tipo)}</a></span>
          <span>País de origen: <a href="../luna-blanca.html?origen=${origen}">${obtenerNombreTag(origen)}</a></span>
          <span>Estado: <a href="../luna-blanca.html?estado=${estado}">${obtenerNombreTag(estado)}</a></span>
        </div>
        <div class="lista-secundaria">
        Ambientado: <a href="../luna-blanca.html?ambientado=${ambientado}">${obtenerNombreTag(ambientado)}</a>
        </div>
        <div class="lista-etiquetas">
          Etiquetas: ${categorias.map(cat => `<a href="../luna-blanca.html?categoria=${cat}">${obtenerNombreTag(cat)}</a>`).join("")}
        </div>
      `;
    }
  }

  // EPUB
//  const linkEpub = tarjetaCoincidente.querySelector(".links-tarjeta a")?.href;
//  if(linkEpub){
//    const contenedorEpub = document.getElementById("epub-container");
 //   if(contenedorEpub){
 //     contenedorEpub.innerHTML = `<div class="epub">Leer en: <a href="${linkEpub}" target="_blank">ePub</a></div>`;
 //   }
//  }
});

/* ================================
   👤 5. CARGAR AUTOR Y RELACIONADOS
================================ */
function cargarAutor(){
  const titulo = document.querySelector("h1")?.textContent.trim();
  if(!titulo) return;

  const parser = new DOMParser();
  const doc = parser.parseFromString(tarjetasHTML, "text/html");
  const cards = doc.querySelectorAll(".card");

  const cardActual = Array.from(cards).find(card =>
    card.querySelector("h3")?.textContent.trim() === titulo
  );
  if(!cardActual) return;

  const autor = cardActual.dataset.autor;
  const autorNombre = autor.split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
  document.querySelector(".autor").innerHTML = `Autor: <a href="../luna-blanca.html?autor=${autor}">${autorNombre}</a>`;

  mostrarPorAutor(autor, "bloque-autor");
}

cargarAutor();


/* ================================
   🖥️ 6. TOOLTIP PARA ETIQUETAS (SOLO ESCRITORIO)
================================ */
function activarTooltips() {
  // No mostrar en pantallas pequeñas (<500px)
  if(window.innerWidth < 500) return;

  const tooltipDiv = document.getElementById("tooltip-tag");
  if(!tooltipDiv) return;

  const etiquetas = document.querySelectorAll(".etiquetas a");

  etiquetas.forEach(a => {
    const categoriaKey = a.getAttribute("href")?.split("categoria=")[1];
    if(!categoriaKey) return;

    const tooltipTexto = tagInfo.categoria[categoriaKey];
    if(!tooltipTexto) return;

    a.addEventListener("mouseenter", () => {
      tooltipDiv.textContent = tooltipTexto;
      tooltipDiv.style.display = "block";

      const rect = a.getBoundingClientRect();
      const top = rect.bottom + 5;
      const tooltipWidth = tooltipDiv.offsetWidth;

      let left;
      // Si el tooltip es más pequeño que 400px, lo dejamos más a la izquierda
      if(tooltipWidth < 400){
        left = Math.max(rect.left, 10); // mínimo 10px desde el borde izquierdo
      } else {
        left = rect.left;
        if(left + tooltipWidth > window.innerWidth - 10){
          left = window.innerWidth - tooltipWidth - 10;
        }
      }

      tooltipDiv.style.top = top + "px";
      tooltipDiv.style.left = left + "px";
    });

    a.addEventListener("mouseleave", () => {
      tooltipDiv.style.display = "none";
    });
  });
}

// Activar tooltips al cargar y al redimensionar
document.addEventListener("DOMContentLoaded", activarTooltips);
window.addEventListener("resize", activarTooltips);
