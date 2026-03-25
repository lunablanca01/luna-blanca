import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qaophiaogsvhkgmbfcuf.supabase.co",
  "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
);

// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  console.log("SIGNUP DATA:", data);
  console.log("SIGNUP ERROR:", error);

  if (error) {
    document.getElementById("mensaje").innerText = error.message;
    return;
  }

  // 🔥 IMPORTANTE: obtener usuario correctamente
  const user = data.user ?? data.session?.user;

  console.log("USER:", user);

  if (!user) {
    console.error("No se pudo obtener el usuario");
    document.getElementById("mensaje").innerText =
      "Error al crear usuario, intenta nuevamente";
    return;
  }

  // 🔥 Crear perfil
  const { error: perfilError } = await supabase
    .from("perfiles")
    .insert({
      id: user.id,
      email: email,
      aprobado: false
    });

  console.log("INSERT ERROR:", perfilError);

  if (perfilError) {
    document.getElementById("mensaje").innerText =
      "Usuario creado, pero error al guardar perfil";
    return;
  }

  document.getElementById("mensaje").innerText =
    "Usuario registrado correctamente 🎉";
};

// =======================
// LOGIN
// =======================
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("mensaje").innerText = error.message;
    return;
  }

  const user = data.user;

  // 🔥 Verificar aprobación
  const { data: perfil, error: perfilError } = await supabase
    .from("perfiles")
    .select("aprobado")
    .eq("id", user.id)
    .single();

  console.log("PERFIL:", perfil);
  console.log("PERFIL ERROR:", perfilError);

  if (perfilError || !perfil?.aprobado) {
    await supabase.auth.signOut();

    document.getElementById("mensaje").innerText =
      "Tu cuenta aún no ha sido aprobada ⏳";
    return;
  }

  // ✅ Usuario aprobado entra
  window.location.href =
    "https://lunablanca01.github.io/luna-blanca/luna-blanca.html";
};
