document.addEventListener("DOMContentLoaded", function() {
  let html = "";

  // Secciones que queremos mostrar
  const secciones = ["ambientado", "categoria"];

  secciones.forEach(seccion => {
    if (!tags[seccion]) return; // evita errores si no existe la sección
    html += `<h2>${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h2>`;
    html += `<div class="grupo-tags">`;

    // Ordenar etiquetas alfabéticamente
    const etiquetas = Object.entries(tags[seccion]).sort((a,b) => a[1].localeCompare(b[1]));

    etiquetas.forEach(([clave, nombre]) => {
      const descripcion = tagInfo[seccion]?.[clave] || "";
      html += `
        <a class="tag" href="../luna-blanca.html?tag=${encodeURIComponent(clave)}">
          <strong>${nombre}</strong>
          ${descripcion ? `<p>${descripcion}</p>` : ""}
        </a>
      `;
    });

    html += `</div>`;
  });

  document.getElementById("guia-etiquetas").innerHTML = html;
});