import { supabase } from "./supabase.js";

const novelas = window.novelasCompartidas || [];

function normalizarTexto(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  if (!contenedor) return;

  contenedor.innerHTML = `<div class="sin-lecturas">Cargando lecturas...</div>`;

  try {
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error al obtener usuario:", userError);
      contenedor.innerHTML = `<div class="sin-lecturas">Error al obtener el usuario</div>`;
      return;
    }

    const user = data?.user;

    if (!user) {
      contenedor.innerHTML = `<div class="sin-lecturas">Debes iniciar sesión para ver tus lecturas ✨</div>`;
      return;
    }

    const { data: lecturas, error } = await supabase
      .from("lecturas")
      .select("novela, estado")
      .eq("usuario_id", user.id);

    if (error) {
      console.error("Error al traer lecturas:", error);
      contenedor.innerHTML = `<div class="sin-lecturas">Ocurrió un error al cargar tus lecturas</div>`;
      return;
    }

    mostrarLecturas(lecturas || []);
  } catch (err) {
    console.error("Error general:", err);
    contenedor.innerHTML = `<div class="sin-lecturas">Algo salió mal al cargar la página</div>`;
  }
});

function mostrarLecturas(lecturas) {
  const contenedor = document.getElementById("contenedor-mis-lecturas");
  contenedor.innerHTML = "";

  const emojiMap = {
    "por_leer": "📘",
    "leyendo": "📖",
    "leido": "✅",
    "leido_mtl": "🈶"
  };

  const estadosNovela = ["pendiente", "finalizado", "en-proceso", "mtl"];

  if (!lecturas.length) {
    contenedor.innerHTML = `<div class="sin-lecturas">Aún no tienes novelas en esta lista ✨</div>`;
    return;
  }

  lecturas.forEach(l => {
    const estadoUsuario = normalizarTexto(l.estado);

    const novelaCompleta = novelas.find(n =>
      normalizarTexto(n.titulo) === normalizarTexto(l.novela)
    );

    const divCard = document.createElement("div");
    divCard.className = "card";

    // Extraer estado de novela desde los tags
    let estadoNovela = "pendiente"; // por defecto
    if (novelaCompleta?.tags) {
      const tagsArray = novelaCompleta.tags.split(" ");
      const encontrado = tagsArray.find(t => estadosNovela.includes(t));
      if (encontrado) estadoNovela = encontrado;
    }

    // Guardar ambos estados en data attributes
    divCard.dataset.estadoUsuario = estadoUsuario;
    divCard.dataset.estadoNovela = estadoNovela;

    if (novelaCompleta) {
      divCard.dataset.tags = novelaCompleta.tags || "";
      divCard.dataset.autor = novelaCompleta.autor || "";

      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoUsuario] || "📘"}</div>
        <div class="estado-novela">${estadoNovela}</div>
        <a href="../novelas/${novelaCompleta.slug}.html">
          <img src="../imagenes/${novelaCompleta.imagen}" alt="${novelaCompleta.titulo}">
        </a>
        <h3>${novelaCompleta.titulo}</h3>
      `;
    } else {
      divCard.innerHTML = `
        <div class="estado-lectura">${emojiMap[estadoUsuario] || "📘"}</div>
        <div class="estado-novela">${estadoNovela}</div>
        <h3>${l.novela || "Sin título"}</h3>
      `;
    }

    contenedor.appendChild(divCard);
  });

  aplicarFiltros(); // para que se aplique cualquier filtro activo al cargar
}

// FILTRO GENERAL: por estado de usuario o estado de novela
window.filtrar = function(filtro) {
  // limpiar clases activas de botones
  document.querySelectorAll(".filtros-estado button, .filtros-novela button").forEach(btn => {
    btn.classList.remove("activo");
  });

  // marcar botón activo
  const boton = document.querySelector(`button[onclick="filtrar('${filtro}')"]`);
  if (boton) boton.classList.add("activo");

  const filtroNormalizado = normalizarTexto(filtro);
  const cards = document.querySelectorAll("#contenedor-mis-lecturas .card");

  cards.forEach(card => {
    let mostrar = true;

    if (["por_leer","leyendo","leido","leido_mtl"].includes(filtroNormalizado)) {
      mostrar = card.dataset.estadoUsuario === filtroNormalizado;
    } else if (["pendiente","finalizado","en-proceso","mtl"].includes(filtroNormalizado)) {
      mostrar = card.dataset.estadoNovela === filtroNormalizado;
    } else if (filtroNormalizado === "todos") {
      mostrar = true;
    } else {
      mostrar = false;
    }

    card.style.display = mostrar ? "block" : "none";
  });
};

// Aplica filtros activos si existen (para refrescar al cargar)
function aplicarFiltros() {
  const activo = document.querySelector(".filtros-estado button.activo, .filtros-novela button.activo");
  if (activo) {
    const filtro = activo.getAttribute("onclick").match(/filtrar\('(.+)'\)/)[1];
    window.filtrar(filtro);
  }
}
