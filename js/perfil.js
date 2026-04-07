const BASE = "/luna-blanca/";

let supabase = null;
let user = null;

/* 🔹 INICIO */
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // importar supabase
    const supa = await import(BASE + "js/supabase.js");
    supabase = supa.supabase;

    // obtener usuario
    const { data } = await supabase.auth.getUser();
    user = data.user;

    if (!user) {
      window.location.href = BASE + "pages/login.html";
      return;
    }

    await cargarDatosUsuario();

    // logout
    document.getElementById("btn-logout")
      .addEventListener("click", cerrarSesion);

  } catch (error) {
    console.error("Error perfil:", error);
  }
});

/* 🔹 CARGAR DATOS */
async function cargarDatosUsuario(){
  try {
    // traer perfil
    const { data: perfil } = await supabase
      .from("perfiles")
      .select("nombre")
      .eq("id", user.id)
      .single();

    // nombre
    const nombre = (perfil && perfil.nombre) 
      ? perfil.nombre 
      : user.email;

    document.getElementById("nombre-usuario").textContent = nombre;

    // email
    document.getElementById("email-usuario").textContent = user.email;

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
    alert("Escribe un nombre");
    return;
  }

  try {
    const { error } = await supabase
      .from("perfiles")
      .update({ nombre: nuevoNombre })
      .eq("id", user.id);

    if (error) throw error;

    // actualizar UI
    document.getElementById("nombre-usuario").textContent = nuevoNombre;

    input.value = "";
    alert("Nombre actualizado ✨");

  } catch (error) {
    console.error(error);
    alert("Error al actualizar nombre");
  }
};

/* 🔹 CAMBIAR CONTRASEÑA */
window.cambiarPassword = async function(){
  const input = document.getElementById("nueva-pass");
  const nuevaPass = input.value.trim();

  if (!nuevaPass) {
    alert("Escribe una contraseña");
    return;
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password: nuevaPass
    });

    if (error) throw error;

    input.value = "";
    alert("Contraseña actualizada 🔐");

  } catch (error) {
    console.error(error);
    alert("Error al cambiar contraseña");
  }
};

/* 🔹 LOGOUT */
async function cerrarSesion(){
  await supabase.auth.signOut();
  window.location.href = BASE;
}