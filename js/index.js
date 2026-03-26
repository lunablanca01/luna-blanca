import { supabase } from "./supabase.js";

// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const email = document.getElementById("emailRegistro").value;
  const password = document.getElementById("passwordRegistro").value;
  const nombre = document.getElementById("nombreRegistro").value;
  const mensaje = document.getElementById("mensaje");

  mensaje.innerText = "";

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    console.log("SIGNUP:", data, error);

    if (error) {
      mensaje.innerText =
        "Ups… revisa tu correo o contraseña 💭";
      return;
    }

    const user = data.user ?? data.session?.user;

    if (!user) {
      mensaje.innerText = "Error al crear usuario 😢";
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
      console.error("PERFIL ERROR:", perfilError);
      mensaje.innerText =
        "Usuario creado, pero error al guardar perfil 😢";
      return;
    }

    mensaje.innerText =
      "Registro exitoso, espera aprobación ⏳";

  } catch (err) {
    console.error("ERROR REGISTRO:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
};

// =======================
// LOGIN
// =======================
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  mensaje.innerText = "";

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    console.log("LOGIN:", data, error);

    if (error) {
      mensaje.innerText =
        "Ups... correo o contraseña incorrectos 💭";
      return;
    }

    const user = data.user;

    // Verificar aprobación
const { data: perfil, error: perfilError } = await supabase
  .from("perfiles")
  .select("aprobado")
  .eq("id", user.id)
  .single();

console.log("PERFIL:", perfil, perfilError);

// ❌ error real
if (perfilError) {
  console.error(perfilError);
  mensaje.innerText = "Error al verificar usuario 😢";
  return;
}

// ❌ no aprobado
if (!perfil.aprobado) {
  await supabase.auth.signOut();

  mensaje.innerText =
    "Tu cuenta aún no ha sido aprobada 🕒";
  return;
}

    // Redirigir si está aprobado
    window.location.href =
      "https://lunablanca01.github.io/luna-blanca/luna-blanca.html";

  } catch (err) {
    console.error("ERROR LOGIN:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
};

// =======================
// RECUPERAR CONTRASEÑA
// =======================
window.recuperarPassword = async () => {
  const email = document.getElementById("emailRecuperar").value;
  const mensaje = document.getElementById("mensaje");

  mensaje.innerText = "";

  if (!email) {
    mensaje.innerText = "Ingresa tu correo 💭";
    return;
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://lunablanca01.github.io/luna-blanca/reset.html"
    });

    console.log("RESET:", error);

    if (error) {
      mensaje.innerText =
        "No pudimos enviar el correo 😢";
      return;
    }

    mensaje.innerText =
      "Te enviamos un enlace a tu correo 💌";

  } catch (err) {
    console.error("ERROR RESET:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
};
