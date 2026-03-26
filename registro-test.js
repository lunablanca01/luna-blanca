import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// 🔹 Reemplaza con tu URL y ANON KEY de Supabase
const supabaseUrl = "https://qaophiaogsvhkgmbfcuf.supabase.co";
const supabaseKey = "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN";
export const supabase = createClient(supabaseUrl, supabaseKey);

const mensaje = document.getElementById("mensaje");

document.getElementById("btnRegistro").addEventListener("click", async () => {
  mensaje.innerText = "";

  const email = document.getElementById("emailRegistro").value;
  const password = document.getElementById("passwordRegistro").value;
  const nombre = document.getElementById("nombreRegistro").value;

  if (!email || !password || !nombre) {
    mensaje.innerText = "Completa todos los campos";
    return;
  }

  try {
    // 🔹 Crear usuario en Auth
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password
    });

    console.log("SIGNUP DATA:", signUpData, "ERROR:", signUpError);

    if (signUpError) {
      mensaje.innerText = `Error Auth: ${signUpError.message}`;
      return;
    }

    const user = signUpData.user;
    if (!user) {
      mensaje.innerText = "Error al crear usuario 😢";
      return;
    }

    // 🔹 Crear perfil en tabla
    const { data: perfilData, error: perfilError } = await supabase
      .from("perfiles")
      .insert([{ id: user.id, email, nombre, aprobado: false }]);

    console.log("PERFIL DATA:", perfilData, "ERROR:", perfilError);

    if (perfilError) {
      mensaje.innerText = `Error al crear perfil: ${perfilError.message}`;
      return;
    }

    mensaje.innerText = "Usuario y perfil creados ✅";

  } catch (err) {
    console.error("ERROR INESPERADO:", err);
    mensaje.innerText = "Error inesperado 😢";
  }
});
