// estado.js
async function ponerIconosEstado() {
  console.log("ponerIconosEstado ejecutada ✅");

  const contenedor = document.getElementById("contenedor-tarjetas");
  if(!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");

  // etiquetas locales
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

  // código de Supabase (opcional)
  ...
}

// se ejecuta automáticamente al cargar el módulo
ponerIconosEstado();
