import { supabase } from "./supabase.js";

// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const emailInput = document.getElementById("emailRegistro");
  const passwordInput = document.getElementById("passwordRegistro");
  const nombreInput = document.getElementById("nombreRegistro");
  const mensaje = document.getElementById("mensaje");

  const email = emailInput.value;
  const password = passwordInput.value;
  const nombre = nombreInput.value;

  // Resetear estilos
  emailInput.style.borderColor = "";
  passwordInput.style.borderColor = "";
  mensaje.innerText = "";

  // Validación rápida
  if (!nombre) {
    mensaje.innerText = "Ingresa tu nombre 💭";
    nombreInput.style.borderColor = "red";
    nombreInput.focus();
    return;
  }

  if (password.length < 6) {
    mensaje.innerText = "La contraseña debe tener al menos 6 caracteres";
    passwordInput.style.borderColor = "red";
    passwordInput.focus();
    return;
  }

  try {
    // Crear usuario en Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    console.log("SIGNUP DATA:", data, "SIGNUP ERROR:", error);

    if (error) {
      // Correo ya registrado
      if (error.message.includes("already registered") || error.status === 400) {
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
    const { data: perfilData, error: perfilError, status } = await supabase
      .from("perfiles")
      .insert({
        id: user.id,
        email: email,
        nombre: nombre,
        aprobado: false
      });

    console.log("PERFIL DATA:", perfilData);
    console.log("PERFIL ERROR:", perfilError);
    console.log("PERFIL STATUS:", status);

    if (perfilError) {
      mensaje.innerText =
        "Usuario creado, pero error al guardar perfil 😢";
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
document.getElementById("emailRegistro").addEventListener("input", () => {
  document.getElementById("emailRegistro").style.borderColor = "";
});

document.getElementById("passwordRegistro").addEventListener("input", () => {
  document.getElementById("passwordRegistro").style.borderColor = "";
});

document.getElementById("nombreRegistro").addEventListener("input", () => {
  document.getElementById("nombreRegistro").style.borderColor = "";
});
