import { supabase } from "./supabase.js";

(async () => {

  document.body.style.display = "none";

  // 1. sesión
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;

  if (!session) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 2. usuario
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "/luna-blanca/luna-blanca.html";
    return;
  }

  // 3. rol
  const { data: perfil, error } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  // ❗ AQUÍ ES LO IMPORTANTE
  if (error || !perfil || perfil.rol !== "admin") {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 4. SOLO ADMIN LLEGA AQUÍ
  document.body.style.display = "block";

  cargarUsuarios();

})();
