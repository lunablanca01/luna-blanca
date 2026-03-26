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
    // 1️⃣ Crear usuario en Auth
    const { data, error } = await supabase.auth.signUp({ email, password });
    console.log("SIGNUP DATA:", data);
    console.log("SIGNUP ERROR:", error);

    if (error) {
      mensaje.innerText = "Error al crear usuario 💭";
      return;
    }

    const user = data.user ?? data.session?.user;
    if (!user) {
      mensaje.innerText = "No se obtuvo el usuario 😢";
      return;
    }

    // 🔹 Activar sesión del usuario inmediatamente (importante para RLS)
    if (data.session?.access_token) {
      await supabase.auth.setSession(data.session.access_token);
      console.log("Sesión activada con token:", data.session.access_token);
    }

    // 2️⃣ Intentar crear perfil
    const { data: perfilData, error: perfilError, status, statusText } = await supabase
      .from("perfiles")
      .insert({ id: user.id, email, nombre, aprobado: false });

    console.log("PERFIL DATA:", perfilData);
    console.log("PERFIL ERROR:", perfilError);
    console.log("PERFIL STATUS:", status, statusText);

    if (perfilError) {
      mensaje.innerText = "Usuario creado, pero error al guardar perfil 😢";
      return;
    }

    mensaje.innerText = "Registro exitoso, espera aprobación ⏳";

  } catch (err) {
    console.error("ERROR INESPERADO:", err);
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
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log("LOGIN DATA:", data);
    console.log("LOGIN ERROR:", error);

    if (error) {
      mensaje.innerText = "Ups... correo o contraseña incorrectos 💭";
      return;
    }

    const user = data.user;
    console.log("USER:", user);

    // Verificar aprobación
    const { data: perfil, error: perfilError } = await supabase
      .from("perfiles")
      .select("aprobado")
      .eq("id", user.id)
      .single();

    console.log("PERFIL DATA:", perfil, "PERFIL ERROR:", perfilError);

    if (perfilError) {
      mensaje.innerText = "Error al verificar usuario 😢";
      return;
    }

    if (!perfil.aprobado) {
      await supabase.auth.signOut();
      mensaje.innerText = "Tu cuenta aún no ha sido aprobada 🕒";
      return;
    }

    // Redirigir si está aprobado
    window.location.href = "https://lunablanca01.github.io/luna-blanca/luna-blanca.html";

  } catch (err) {
    console.error("ERROR INESPERADO LOGIN:", err);
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

    console.log("RESET ERROR:", error);

    if (error) {
      mensaje.innerText = "No pudimos enviar el correo 😢";
      return;
    }

    mensaje.innerText = "Te enviamos un enlace a tu correo 💌";

  } catch (err) {
    console.error("ERROR INESPERADO RESET:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
};

