import { supabase } from .supabase.js;

async function cargarUsuario() {
  const contenedor = document.getElementById(usuario-container);
  if (!contenedor) return;

  try {
     📦 cargar HTML del componente
    const res = await fetch(pagesusuario.html);
    const html = await res.text();
    contenedor.innerHTML = html;

     🎯 elementos
    const btnUsuario = document.getElementById(btn-usuario);
    const menuUsuario = document.getElementById(menuUsuario);
    const nombreUsuario = document.getElementById(nombre-usuario);
    const btnCerrar = document.getElementById(cerrarSesion);

     🧠 abrircerrar menú
    btnUsuario.addEventListener(click, (e) = {
      e.stopPropagation();
      menuUsuario.classList.toggle(activo);
    });

    document.addEventListener(click, () = {
      menuUsuario.classList.remove(activo);
    });

    menuUsuario.addEventListener(click, (e) = {
      e.stopPropagation();
    });

     🔐 obtener usuario
    const { data { user } } = await supabase.auth.getUser();

    if (user) {
      nombreUsuario.textContent =
        user.user_metadata.nombre  user.email;
    } else {
      nombreUsuario.textContent = Invitado;

       opcional cambiar menú si no hay sesión
      btnCerrar.textContent = Iniciar sesión;
      btnCerrar.href = pageslogin.html;
    }

     🚪 cerrar sesión
    btnCerrar.addEventListener(click, async (e) = {
      if (btnCerrar.textContent === Cerrar sesión) {
        e.preventDefault();
        await supabase.auth.signOut();
        window.location.href = index.html;
      }
    });

  } catch (error) {
    console.error(Error cargando usuario, error);
  }
}

cargarUsuario();