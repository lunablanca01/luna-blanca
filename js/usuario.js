// usuario.js
import { supabase } from "/js/supabase.js"; // ⚡ ruta absoluta desde la raíz

async function cargarUsuario() {
  const contenedor = document.getElementById("usuario-container");
  if (!contenedor) return;

  try {
    // 📦 cargar HTML del componente desde ruta absoluta
    const res = await fetch("/pages/usuario.html");
    let html = await res.text();

    // 🔐 obtener usuario antes de insertar HTML
    const { data: { user } } = await supabase.auth.getUser();
    let rol = "user";

    if (user) {
      // 🔥 traer nombre y rol desde la tabla perfiles
      const { data: perfil } = await supabase
        .from("perfiles")
        .select("nombre, rol")
        .eq("id", user.id)
        .single();

      if (perfil) {
        rol = perfil.rol || "user";
      }
    }

    // 👀 filtrar contenido solo para admin
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

    // 🧠 abrir/cerrar menú
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

    // 🔐 mostrar nombre de usuario
    if (user) {
      const { data: perfil } = await supabase
        .from("perfiles")
        .select("nombre")
        .eq("id", user.id)
        .single();

      nombreUsuario.textContent = (perfil && perfil.nombre) ? perfil.nombre : user.email;

      // 👇 mostrar elementos solo admin si corresponde
      if (rol === "admin") {
        document.querySelectorAll(".solo-admin")
          .forEach(el => el.style.display = "block");
        const epub = document.getElementById("epub-container");
        if (epub) epub.style.display = "block";
      }

    } else {
      nombreUsuario.textContent = "Invitado";
      btnCerrar.textContent = "Iniciar sesión";
      btnCerrar.href = "/pages/login.html";
    }

    // 🚪 cerrar sesión
    btnCerrar.addEventListener("click", async (e) => {
      if (btnCerrar.textContent === "Cerrar sesión") {
        e.preventDefault();
        await supabase.auth.signOut();
        window.location.href = "/";
      }
    });

  } catch (error) {
    console.error("Error cargando usuario:", error);
  }
}

cargarUsuario();
