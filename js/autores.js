function formatearAutor(slug){
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());
}

const parser = new DOMParser();
const doc = parser.parseFromString(tarjetasHTML, "text/html");

const cards = doc.querySelectorAll(".card");

let conteoAutores = {};

cards.forEach(card => {

  const autor = card.dataset.autor;

  if(!conteoAutores[autor]){
    conteoAutores[autor] = 0;
  }

  conteoAutores[autor]++;

});

let autoresOrdenados = Object.entries(conteoAutores)
  .sort((a,b) => b[1] - a[1]);

const contenedor = document.getElementById("lista-autores");

contenedor.innerHTML = autoresOrdenados.map(([autor,cantidad]) => `
  <div class="autor-item">
    <a href="../luna-blanca.html?autor=${encodeURIComponent(autor)}">
      ${formatearAutor(autor)}
    </a>
    - ${cantidad} ${cantidad === 1 ? "Novela" : "Novelas"}
  </div>
`).join("");

window.addEventListener("scroll", function() {
  const scrollTopBtn = document.getElementById("scrollTop");
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
