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
    const tipo = tagsArray[0] || "";
    const estado = tagsArray[1] || "";
    const ambientado = tagsArray[2] || "";
    const categorias = tagsArray.slice(3);
    const contenedor = document.querySelector(".etiquetas");
    if(contenedor){
      contenedor.innerHTML = `
        <span>Tipo: <a href="../luna-blanca.html?tipo=${tipo}">${obtenerNombreTag(tipo)}</a></span>
        <span>Estado: <a href="../luna-blanca.html?estado=${estado}">${obtenerNombreTag(estado)}</a></span>
        <span>Ambientado: <a href="../luna-blanca.html?ambientado=${ambientado}">${obtenerNombreTag(ambientado)}</a></span>
        <br>
        <div class="lista-etiquetas">
          Etiqueta: ${categorias.map(cat => `<a href="../luna-blanca.html?categoria=${cat}">${obtenerNombreTag(cat)}</a>`).join("")}
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
