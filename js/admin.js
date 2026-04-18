import { supabase } from "./supabase.js";

(async () => {

  document.body.style.display = "none";

  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;

  // ❌ no logueado → login
  if (!session) {
    window.location.href = "/index.html";
    return;
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "/index.html";
    return;
  }

  const { data: perfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  // ❌ logueado pero NO admin → home
  if (!perfil || perfil.rol !== "admin") {
    window.location.href = "/luna-blanca.html";
    return;
  }

  // ✔ admin correcto
  document.body.style.display = "block";

  cargarUsuarios();

})();
