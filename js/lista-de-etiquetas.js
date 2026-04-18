function obtenerNombreTag(valor){

  for (let grupo in tags){
    if(tags[grupo][valor]){
      return tags[grupo][valor];
    }
  }

  return valor;

}


document.addEventListener("DOMContentLoaded", function(){

  const conteo = {};
  const tagsInvalidos = {};

  // contar todas las etiquetas
  novelas.forEach(novela => {

    const lista = novela.tags.toLowerCase().split(" ");

    lista.forEach(tag => {

      if(!conteo[tag]){
        conteo[tag] = 0;
      }

      conteo[tag]++;

      // comprobar si existe en tags.js
      let existe = false;

      for(let grupo in tags){
        if(tags[grupo][tag]){
          existe = true;
          break;
        }
      }

      // si no existe, guardarlo como inválido
      if(!existe){
        tagsInvalidos[tag] = true;
        console.warn("Etiqueta no definida:", tag, "en novela:", novela.titulo);
      }

    });

  });


  let html = "";

  // recorrer los grupos de tags
  for(let grupo in tags){

    html += `<h2>${grupo.charAt(0).toUpperCase() + grupo.slice(1)}</h2>`;
    html += `<div class="grupo-tags">`;

    for(let tag in tags[grupo]){

      if(conteo[tag]){

        html += `
        <a class="tag" href="luna-blanca.html?${grupo}=${tag}">
          ${tags[grupo][tag]}
          <span class="cantidad">(${conteo[tag]})</span>
        </a>
        `;

      }

    }

    html += `</div>`;

  }

  // ⭐ mostrar etiquetas inválidas
  if(Object.keys(tagsInvalidos).length > 0){

    html += `<h2>Etiquetas incorrectas</h2>`;
    html += `<div class="grupo-tags">`;

    for(let tag in tagsInvalidos){

      html += `
      <span class="tag tag-error">
        ⚠ ${tag}
        <span class="cantidad">(${conteo[tag]})</span>
      </span>
      `;

    }

    html += `</div>`;

  }

  document.getElementById("lista-etiquetas").innerHTML = html;

});