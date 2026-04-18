import { supabase } from "./supabase.js";

// =======================
// VERIFICAR SI ES ADMIN
// =======================
const verificarAdmin = async () => {

  const { data: userData } = await supabase.auth.getUser();

  const user = userData?.user;

  if (!user) {
    window.location.href = "/login.html";
    return;
  }

  const { data: perfil, error } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  if (error || !perfil) {
    window.location.href = "/";
    return;
  }

  if (perfil.rol !== "admin") {
    window.location.href = "/";
    return;
  }

  // Si es admin, mostrar contenido
  document.getElementById("contenido").style.display = "block";

  cargarUsuarios();
};

verificarAdmin();