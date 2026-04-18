import { supabase } from "./supabase.js";

(async () => {

  document.body.style.display = "none";

  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;

  // ❌ no logueado → login
  if (!session) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  const { data: perfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  // ❌ logueado pero NO admin → home
  if (!perfil || perfil.rol !== "admin") {
    window.location.href = "/luna-blanca/luna-blanca.html";
    return;
  }

  // ✔ admin correcto
  document.body.style.display = "block";

  cargarUsuarios();

})();





window.cambiarRol = async (id, email, nuevoRol) => {

  // 1. actualizar rol en Supabase
  const { error } = await supabase
    .from("perfiles")
    .update({ rol: nuevoRol })
    .eq("id", id);

  if (error) {
    alert("Error al cambiar rol");
    return;
  }

  // 2. enviar correo
  await fetch('/functions/v1/send-role-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, rol: nuevoRol })
  });

  alert("Rol actualizado y correo enviado");
};




import { serve } from "https://deno.land/std/http/server.ts";

serve(async (req) => {

  const { email, rol } = await req.json();

  let mensaje = "";

  if (rol === "admin") {
    mensaje = "Ahora eres administrador 🎉";
  } else {
    mensaje = "Tu rol ha sido actualizado a usuario";
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer TU_RESEND_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "tuapp@dominio.com",
      to: email,
      subject: "Cambio de rol",
      html: `<h1>${mensaje}</h1>`
    })
  });

  return new Response("ok");
});

