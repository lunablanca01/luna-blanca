import { supabase } from "./supabase.js";

(async () => {

  // 🔒 ocultar todo mientras valida
  document.body.style.display = "none";

  // 1. verificar sesión
  const { data: sessionData } = await supabase.auth.getSession();

  const session = sessionData.session;

  if (!session) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 2. obtener usuario
  const { data: { user } } = await supabase.auth.getUser();

  // 3. verificar rol en base de datos
  const { data: perfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  // 4. si no es admin → fuera
  if (!perfil || perfil.rol !== "admin") {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 5. si es admin → mostrar página
  document.body.style.display = "block";

  cargarUsuarios();

})();
