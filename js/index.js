import { supabase } from "./supabase.js";

// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const emailInput = document.getElementById("emailRegistro");
  const passwordInput = document.getElementById("passwordRegistro");
  const nombreInput = document.getElementById("nombreRegistro");
  const mensaje = document.getElementById("mensaje");

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const nombre = nombreInput.value.trim();

  // Resetear mensaje
  mensaje.innerText = "";

  let error = false;

  // Validaciones
  if (!nombre) {
    mensaje.innerText = "Ingresa tu nombre 💭";
    nombreInput.style.borderColor = "red";
    nombreInput.focus();
    error = true;
  } else {
    nombreInput.style.borderColor = "";
  }

  if (password.length < 6) {
    mensaje.innerText = "La contraseña debe tener al menos 6 caracteres 💭";
    passwordInput.style.borderColor = "red";
    if (!error) passwordInput.focus();
    error = true;
  } else {
    passwordInput.style.borderColor = "";
  }

  if (!email) {
    mensaje.innerText = "Ingresa tu correo 💭";
    emailInput.style.borderColor = "red";
    if (!error) emailInput.focus();
    error = true;
  } else {
    emailInput.style.borderColor = "";
  }

  if (error) return;

  try {
    // Crear usuario en Auth
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password
    });

    console.log("SIGNUP DATA:", data, "SIGNUP ERROR:", signupError);

    if (signupError) {
      // Detectar correo ya registrado
      if (
        signupError.message.includes("already registered") ||
        signupError.status === 400
      ) {
        mensaje.innerText = "Correo ya registrado 💭";
        emailInput.style.borderColor = "red";
        emailInput.focus();
      } else {
        mensaje.innerText = "Ups… revisa tu correo o contraseña 💭";
      }
      return;
    }

    const user = data.user ?? data.session?.user;
    if (!user) {
      mensaje.innerText = "Error al crear usuario 😢";
      return;
    }

    // Activar sesión temporal (para REST)
    if (data.session?.access_token) {
      await supabase.auth.setSession(data.session.access_token);
      console.log("Sesión activada con token:", data.session.access_token);
    }

    // Insertar perfil
    const { data: perfilData, error: perfilError } = await supabase
      .from("perfiles")
      .insert({
        id: user.id,
        email: email,
        nombre: nombre,
        aprobado: false
      });

    if (perfilError) {
      mensaje.innerText = "Usuario creado, pero error al guardar perfil 😢";
      return;
    }

    mensaje.innerText = "Registro exitoso, espera aprobación ⏳";

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

    console.log("PERFIL:", perfil, "ERROR PERFIL:", perfilError);

    if (perfilError) {
      mensaje.innerText = "Error al verificar usuario 😢";
      return;
    }

    if (!perfil.aprobado) {
      await supabase.auth.signOut();
      mensaje.innerText = "Tu cuenta aún no ha sido aprobada 🕒";
      return;
    }

    // Redirigir si aprobado
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
      redirectTo:
        "https://lunablanca01.github.io/luna-blanca/reset.html"
    });

    console.log("RESET:", error);

    if (error) {
      mensaje.innerText = "No pudimos enviar el correo 😢";
      return;
    }

    mensaje.innerText = "Te enviamos un enlace a tu correo 💌";

  } catch (err) {
    console.error("ERROR RESET:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
};

// =======================
// MOSTRAR / OCULTAR CONTRASEÑA
// =======================
window.togglePassword = (id, icon) => {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.textContent = "👁️";
  } else {
    input.type = "password";
    icon.textContent = "🙈";
  }
};

// =======================
// FUNCIONES DE UI
// =======================
window.mostrarRegistro = () => {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registroForm").style.display = "block";
  document.getElementById("recuperarForm").style.display = "none";
};

window.mostrarLogin = () => {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registroForm").style.display = "none";
  document.getElementById("recuperarForm").style.display = "none";
};

window.mostrarRecuperar = () => {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registroForm").style.display = "none";
  document.getElementById("recuperarForm").style.display = "block";
};

// =======================
// RESTABLECER ESTILO AL ESCRIBIR
// =======================
const resetInputStyle = (input) => {
  input.addEventListener("input", () => {
    if (input.style.borderColor === "red") {
      // Solo quitar rojo si ahora el valor es válido
      if (input.id === "emailRegistro" && input.value) input.style.borderColor = "";
      if (input.id === "passwordRegistro" && input.value.length >= 6) input.style.borderColor = "";
      if (input.id === "nombreRegistro" && input.value) input.style.borderColor = "";
    }
  });
};

resetInputStyle(document.getElementById("emailRegistro"));
resetInputStyle(document.getElementById("passwordRegistro"));
resetInputStyle(document.getElementById("nombreRegistro"));
