// usuario.js

const BASE = "/luna-blanca/"; // 🔥 nombre de tu repo

async function cargarUsuario() {
  try {
    // 🔹 importar supabase correctamente
    const { supabase } = await import(BASE + "js/supabase.js");

    const contenedor = document.getElementById("usuario-container");
    if (!contenedor) return;

    // 📦 cargar HTML del componente
    const res = await fetch(BASE + "pages/usuario.html");
    let html = await res.text();

    // 🔐 obtener usuario
    const { data: { user } } = await supabase.auth.getUser();
    let rol = "user";

    if (user) {
      const { data: perfil } = await supabase
        .from("perfiles")
        .select("nombre, rol")
        .eq("id", user.id)
        .single();

      if (perfil) {
        rol = perfil.rol || "user";
      }
    }

    // 👀 ocultar cosas de admin si no lo es
    if (rol !== "admin") {
      html = html.replace(/class="solo-admin"/g, 'style="display:none"');
      html = html.replace(/id="epub-container"/g, 'id="epub-container" style="display:none"');
    }

    contenedor.innerHTML = html;

    // 🎯 elementos
    const btnUsuario = document.getElementById("btn-usuario");
    const menuUsuario = document.getElementById("menuUsuario");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const btnCerrar = document.getElementById("cerrarSesion");

    // 🧠 menú
    btnUsuario.addEventListener("click", (e) => {
      e.stopPropagation();
      menuUsuario.classList.toggle("activo");
    });

    document.addEventListener("click", () => {
      menuUsuario.classList.remove("activo");
    });

    menuUsuario.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // 🔐 usuario
    if (user) {
      const { data: perfil } = await supabase
        .from("perfiles")
        .select("nombre")
        .eq("id", user.id)
        .single();

      nombreUsuario.textContent =
        (perfil && perfil.nombre) ? perfil.nombre : user.email;

      if (rol === "admin") {
        document.querySelectorAll(".solo-admin")
          .forEach(el => el.style.display = "block");

        const epub = document.getElementById("epub-container");
        if (epub) epub.style.display = "block";
      }

    } else {
      nombreUsuario.textContent = "Invitado";
      btnCerrar.textContent = "Iniciar sesión";
      btnCerrar.href = BASE + "pages/login.html";
    }

    // 🚪 cerrar sesión
    btnCerrar.addEventListener("click", async (e) => {
      if (btnCerrar.textContent === "Cerrar sesión") {
        e.preventDefault();
        await supabase.auth.signOut();
        window.location.href = BASE;
      }
    });

  } catch (error) {
    console.error("Error cargando usuario:", error);
  }
}

cargarUsuario();
