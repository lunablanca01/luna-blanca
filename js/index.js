import { supabase } from "./supabase.js";

// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const email = document.getElementById("emailRegistro").value;
  const password = document.getElementById("passwordRegistro").value;
  const nombre = document.getElementById("nombreRegistro").value;

  document.getElementById("mensaje").innerText = "";

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
  document.getElementById("mensaje").innerText =
    "Ups… revisa tu correo o contraseña 💭";
  return;
}

  const user = data.user ?? data.session?.user;

  if (!user) {
    document.getElementById("mensaje").innerText =
      "Error al crear usuario";
    return;
  }

  // Guardar perfil
  const { error: perfilError } = await supabase
    .from("perfiles")
    .insert({
      id: user.id,
      email: email,
      nombre: nombre,
      aprobado: false
    });

  if (perfilError) {
    document.getElementById("mensaje").innerText =
      "Usuario creado, pero error al guardar perfil";
    return;
  }

  document.getElementById("mensaje").innerText =
    "Registro exitoso, espera aprobación ⏳";
};

// =======================
// LOGIN
// =======================
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("mensaje").innerText = "";

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("mensaje").innerText = error.message;
    return;
  }

  const user = data.user;

  // Verificar aprobación
  const { data: perfil, error: perfilError } = await supabase
    .from("perfiles")
    .select("aprobado")
    .eq("id", user.id)
    .single();

  if (perfilError || !perfil?.aprobado) {
    await supabase.auth.signOut();

    document.getElementById("mensaje").innerText =
      "Tu cuenta aún no ha sido aprobada por Luna Blanca 🌙✨";
    return;
  }

  // Redirigir si está aprobado
  window.location.href =
    "https://lunablanca01.github.io/luna-blanca/luna-blanca.html";
};


// =======================
// RECUPERAR CONTRASEÑA
// =======================
window.recuperarPassword = async () => {
  const email = document.getElementById("emailRecuperar").value;

  document.getElementById("mensaje").innerText = "";

  if (!email) {
    document.getElementById("mensaje").innerText =
      "Ingresa tu correo 💭";
    return;
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://lunablanca01.github.io/luna-blanca/reset.html"
  });

  if (error) {
    document.getElementById("mensaje").innerText =
      "No pudimos enviar el correo 😢";
    return;
  }

  document.getElementById("mensaje").innerText =
    "Te enviamos un enlace a tu correo 💌";
};
