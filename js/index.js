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
  password,
  options: {
    emailRedirectTo: "https://lunablanca01.github.io/luna-blanca/confirmado.html"
  }
});

if (error) {
  document.getElementById("mensaje").innerText = error.message;
  return;
}

// 🔥 SOLUCIÓN AQUÍ
const user = data.user ?? data.session?.user;

if (user) {
  const { error: perfilError } = await supabase
    .from("perfiles")
    .insert({
      id: user.id,
      email: email,
      aprobado: false
    });

  if (perfilError) {
    console.error("Error creando perfil:", perfilError.message);
  }
}

  document.getElementById("mensaje").innerText =
    "Revisa tu correo para confirmar 📩";
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
