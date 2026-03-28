function obtenerEstadoNovela(tags) {
  tags = (tags || "").toLowerCase();

  if (tags.includes("finalizado")) {
    return { texto: "Finalizado", clase: "estado-finalizado" };
  }

  if (tags.includes("en-proceso")) {
    return { texto: "En proceso", clase: "estado-proceso" };
  }

  if (tags.includes("mtl")) {
    return { texto: "MTL", clase: "estado-mtl" };
  }

  if (tags.includes("pendiente")) {
    return { texto: "Pendiente", clase: "estado-pendiente" };
  }

  return null;
}

function aplicarEstadoNovela() {

  document.querySelectorAll(".card").forEach(card => {

    // evitar duplicados 👇
    if (card.querySelector(".estado")) return;

    const tags = card.dataset.tags;
    const estado = obtenerEstadoNovela(tags);

    if (!estado) return;

    const etiqueta = `
      <div class="estado ${estado.clase}">
        ${estado.texto}
      </div>
    `;

    card.insertAdjacentHTML("afterbegin", etiqueta);

  });

}

/* auto en home */
window.addEventListener("load", aplicarEstadoNovela);

/* 👇 hacerlo global para usar en otros JS */
window.aplicarEstadoNovela = aplicarEstadoNovela;