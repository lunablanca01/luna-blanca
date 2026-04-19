import { supabase } from "./supabase.js";

(async () => {

  // 1. SESIÓN
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 2. USUARIO
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 3. PERFIL
  const { data: perfil, error } = await supabase
    .from("perfiles")
    .select("aprobado")
    .eq("id", user.id)
    .single();

  if (error || !perfil) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // 4. PENDIENTE
  if (!perfil.aprobado) {
    window.location.href = "/luna-blanca/pages/pendiente.html";
    return;
  }

  // 5. ✅ APROBADO → DEJAR ENTRAR
  // aquí normalmente activas la UI si la tienes oculta
  document.body.style.display = "block";

})();
