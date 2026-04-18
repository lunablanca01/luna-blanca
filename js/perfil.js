const BASE = "/luna-blanca/";

let supabase = null;
let user = null;

/* 🔹 INICIO */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const supa = await import(BASE + "js/supabase.js");
    supabase = supa.supabase;

    const { data } = await supabase.auth.getUser();
    user = data.user;

    if (!user) {
      window.location.href = BASE + "/index.html";
      return;
    }

    await cargarDatosUsuario();

    document.getElementById("btn-logout")
      .addEventListener("click", cerrarSesion);

  } catch (error) {
    console.error("Error perfil:", error);
  }
});

/* 🔹 CARGAR DATOS */
async function cargarDatosUsuario(){
  try {

    console.log("USER:", user);

    const { data: perfil, error } = await supabase
      .from("perfiles")
      .select("nombre")
      .eq("id", user.id)
      .maybeSingle();

    console.log("PERFIL:", perfil, error);

    // 🔥 prioridad: BD → metadata → email
    const nombre = perfil?.nombre 
      || user.user_metadata?.nombre 
      || user.email;

    document.getElementById("nombre-usuario").textContent = nombre;
    document.getElementById("email-usuario").textContent = user.email;

    // llenar input
    const input = document.getElementById("nuevo-nombre");
    if (input) input.value = nombre;

  } catch (error) {
    console.error("Error cargando datos:", error);
  }
}

/* 🔹 CAMBIAR SECCIONES */
window.mostrarSeccion = function(seccion){
  document.querySelectorAll(".seccion")
    .forEach(s => s.classList.remove("activa"));

  document.getElementById("seccion-" + seccion)
    .classList.add("activa");
};

/* 🔹 CAMBIAR NOMBRE */
window.cambiarNombre = async function(){
  const input = document.getElementById("nuevo-nombre");
  const nuevoNombre = input.value.trim();

  if (!nuevoNombre) {
    mostrarToast("Escribe un nombre");
    return;
  }

  try {

    // 🔥 actualizar tabla perfiles
    const { error } = await supabase
      .from("perfiles")
      .update({ nombre: nuevoNombre })
      .eq("id", user.id);

    if (error) throw error;

    // 🔥 actualizar metadata
    await supabase.auth.updateUser({
      data: { nombre: nuevoNombre }
    });

    document.getElementById("nombre-usuario").textContent = nuevoNombre;

    mostrarToast("Nombre actualizado ✨");

  } catch (error) {
    console.error(error);
    mostrarToast("Error al actualizar nombre");
  }
};

/* 🔹 CAMBIAR CONTRASEÑA */
window.cambiarPassword = async function(){
  const input = document.getElementById("nueva-pass");
  const nuevaPass = input.value.trim();

  if (!nuevaPass) {
    mostrarToast("Escribe una contraseña");
    return;
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password: nuevaPass
    });

    if (error) throw error;

    input.value = "";
    mostrarToast("Contraseña actualizada 🔐");

  } catch (error) {
    console.error(error);
    mostrarToast("Error al cambiar contraseña");
  }
};

/* 🔹 LOGOUT */
async function cerrarSesion(){
  await supabase.auth.signOut();
  window.location.href = BASE;
}

/* 🔹 MOSTRAR / OCULTAR PASSWORD */
window.togglePassword = function(){
  const input = document.getElementById("nueva-pass");
  const icon = document.querySelector(".toggle-pass");

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "🙈";
  } else {
    input.type = "password";
    icon.textContent = "👁️";
  }
};

/* 🔹 TOAST BONITO */
function mostrarToast(mensaje){
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = mensaje;

  // 🔥 reset animación si se repite rápido
  toast.classList.remove("show");
  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
