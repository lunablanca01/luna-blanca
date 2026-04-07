const BASE = "/luna-blanca/"; // 🔥 mismo que usuario.js

async function cargarBanner() {
  try {
    const contenedor = document.getElementById("banner-container");
    if (!contenedor) return;

    const res = await fetch(BASE + "pages/banner.html");
    const html = await res.text();

    contenedor.innerHTML = html;

    // Ejemplo: scroll hacia arriba
    const upArrow = contenedor.querySelector(".up-arrow");
    if (upArrow) {
      upArrow.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  } catch (err) {
    console.error("Error cargando banner:", err);
  }
}

cargarBanner();