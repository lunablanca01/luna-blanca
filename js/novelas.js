/* ================================
   🧰 FUNCIONES GENERALES
================================ */

// Tarjetas
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

// Autor
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
    const tituloCard = card.querySelector("h3")?.innerText.trim();
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
      const autorNombre = autor.split("-").map(p => p.charAt(0).toUpperCase()+p.slice(1)).join(" ");
      document.querySelector(".autor").innerHTML =
        `Autor: <a href="../luna-blanca.html?autor=${autor}">${autorNombre}</a>`;
      mostrarPorAutor(autor, "bloque-autor");
    }
  });
}

// Tags
function obtenerNombreTag(valor){
  for(let grupo in tags){
    if(tags[grupo][valor]) return tags[grupo][valor];
  }
  return valor;
}

// Toast
function mostrarToast(mensaje, tipo = "ok") {
  const toast = document.getElementById("toast");
  if(!toast) return;
  toast.textContent = (tipo==="ok"?"✅":"❌") + " " + mensaje;
  toast.className = "toast";
  toast.classList.add("show", tipo);
  setTimeout(()=>{ toast.classList.remove("show"); }, 2000);
}

/* ================================
   🚀 INICIO DE LA PÁGINA
================================ */
document.addEventListener("DOMContentLoaded", async () => {
  const capElem = document.querySelector(".capitulos");
  let totalCap = 0;

  if(capElem){
    const numeros = capElem.textContent.match(/\d+/g);
    if(numeros){
      totalCap = numeros.reduce((acc, num)=>acc+parseInt(num),0);
      document.getElementById("total-capitulos").textContent = totalCap;
      const inputProgreso = document.getElementById("progreso-capitulo");
      if(inputProgreso) inputProgreso.max = totalCap;
    }
  }

  // Etiquetas y EPUB
  const tituloActual = document.querySelector("h1")?.textContent.trim();
  if(tituloActual){
    const parser = new DOMParser();
    const doc = parser.parseFromString(tarjetasHTML, "text/html");
    const cards = doc.querySelectorAll(".card");

    let tarjetaCoincidente = null;
    cards.forEach(card => {
      const nombreCard = card.querySelector("h3")?.textContent.trim();
      if(nombreCard === tituloActual) tarjetaCoincidente = card;
    });

    if(tarjetaCoincidente){
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
              Etiqueta: ${categorias.map(cat=>`<a href="../luna-blanca.html?categoria=${cat}">${obtenerNombreTag(cat)}</a>`).join("")}
            </div>
          `;
        }
      }

      const linkEpub = tarjetaCoincidente.querySelector(".links-tarjeta a")?.href;
      if(linkEpub){
        const contenedorEpub = document.getElementById("epub-container");
        if(contenedorEpub){
          contenedorEpub.innerHTML = `<div class="epub">Leer en: <a href="${linkEpub}" target="_blank">ePub</a></div>`;
        }
      }
    }
  }

  // Autor
  cargarAutor();

  /* ================================
     💾 SUPABASE (solo remoto)
  ================================= */
  if(location.protocol !== "file:"){
    const { supabase } = await import("./supabase.js");

    const { data:{user} } = await supabase.auth.getUser();
    if(!user) return;

    const selectEstado = document.getElementById("estado-lectura");
    const inputProgreso = document.getElementById("progreso-capitulo");
    const btnGuardar = document.getElementById("guardar-lectura");
    if(!selectEstado || !inputProgreso || !tituloActual) return;

    // Cargar estado
    const { data } = await supabase.from("lecturas")
      .select("*")
      .eq("usuario_id", user.id)
      .eq("novela", tituloActual)
      .maybeSingle();

    if(data){
      selectEstado.value = data.estado;
      inputProgreso.value = data.progreso;
    }

    // Guardar estado
    if(btnGuardar){
      btnGuardar.addEventListener("click", async ()=>{
        const valor = parseInt(inputProgreso.value);
        if(isNaN(valor)){ alert("Ingresa un número válido"); return; }

        const { error } = await supabase.from("lecturas").upsert(
          { usuario_id: user.id, novela: tituloActual, estado: selectEstado.value, progreso: valor },
          { onConflict: ["usuario_id","novela"] }
        );

        if(!error) mostrarToast("Guardado","ok");
        else mostrarToast("Error al guardar","error");
      });
    }
  } else {
    console.log("Modo local: Supabase desactivado");
  }
});
