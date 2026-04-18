function cargarLogo() {
  const contenedor = document.getElementById("logo-container");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <div class="logo-global">
      <a href="/luna-blanca/luna-blanca.html">Luna Blanca</a>
    </div>
  `;
}

cargarLogo();
