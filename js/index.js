import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qaophiaogsvhkgmbfcuf.supabase.co",
  "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
);

// REGISTRO (ahora usa confirmado.html)
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://lunablanca01.github.io/luna-blanca/confirmado.html"
    }
  });

  document.getElementById("mensaje").innerText =
    error ? error.message : "Revisa tu correo para confirmar 📩";
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("mensaje").innerText = error.message;
  } else {
    window.location.href = "https://lunablanca01.github.io/luna-blanca/luna-blanca.html";
  }
};