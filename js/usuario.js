import { supabase } from "./supabase.js";

async function cargarUsuario() {
  const contenedor = document.getElementById("usuario-container");
  if (!contenedor) return;

  try {
    // 📦 cargar HTML del componente
    const res = await fetch("luna-blanca/pages/usuario.html");
    const html = await res.text();
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

    // 🔐 obtener usuario
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      // 🔥 traer nombre desde la tabla perfiles
      const { data: perfil, error } = await supabase
        .from("perfiles")
        .select("nombre")
        .eq("id", user.id)
        .single();

      if (perfil && perfil.nombre) {
        nombreUsuario.textContent = perfil.nombre;
      } else {
        nombreUsuario.textContent = user.email; // fallback
      }

    } else {
      nombreUsuario.textContent = "Invitado";

      // cambiar menú si no hay sesión
      btnCerrar.textContent = "Iniciar sesión";
      btnCerrar.href = "./pages/login.html";
    }

    // 🚪 cerrar sesión
    btnCerrar.addEventListener("click", async (e) => {
      if (btnCerrar.textContent === "Cerrar sesión") {
        e.preventDefault();
        await supabase.auth.signOut();
        window.location.href = "./index.html";
      }
    });

  } catch (error) {
    console.error("Error cargando usuario:", error);
  }
}

cargarUsuario();
