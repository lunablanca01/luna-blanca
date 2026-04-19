import { supabase } from "./supabase.js";

(async () => {

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    window.location.href = "/index.html";
    return;
  }

  const { data: { user } } = await supabase.auth.getUser();

  const { data: perfil } = await supabase
    .from("perfiles")
    .select("aprobado")
    .eq("id", user.id)
    .single();

  if (!perfil || !perfil.aprobado) {
    window.location.href = "/pendiente.html";
    return;
  }

})();
