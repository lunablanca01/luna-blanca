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


const cargarPendientes = async () => {

  const { data } = await supabase
    .from("perfiles")
    .select("*")
    .eq("aprobado", false);

  const contenedor = document.getElementById("pendientes");
  contenedor.innerHTML = "";

  (data || []).forEach(user => {

    contenedor.innerHTML += `
      <div>
        <span>${user.email}</span>

        <button onclick="aprobar('${user.id}', '${user.email}')">✔</button>
        <button onclick="rechazar('${user.id}')">✖</button>
      </div>
    `;
  });
};


window.aprobar = async (id, email) => {

  await supabase
    .from("perfiles")
    .update({ aprobado: true })
    .eq("id", id);

  await fetch("/functions/v1/send-approved-email", {
    method: "POST",
    body: JSON.stringify({ email })
  });

  cargarPendientes();
};




window.rechazar = async (id) => {

  await supabase
    .from("perfiles")
    .delete()
    .eq("id", id);

  cargarPendientes();
};


const cambiarRol = async () => {

  const email = document.getElementById("emailRol").value;

  const { data: user } = await supabase
    .from("perfiles")
    .select("*")
    .eq("email", email)
    .single();

  if (!user) {
    alert("Correo no existe");
    return;
  }

  const nuevoRol = user.rol === "admin" ? "user" : "admin";

  await supabase
    .from("perfiles")
    .update({ rol: nuevoRol })
    .eq("id", user.id);

  cargarAdmins();
};


const cargarAdmins = async () => {

  const { data } = await supabase
    .from("perfiles")
    .select("*")
    .eq("rol", "admin");

  const contenedor = document.getElementById("admins");
  contenedor.innerHTML = "";

  (data || []).forEach(user => {

    contenedor.innerHTML += `
      <div>
        <span>${user.email}</span>
        <button onclick="cambiarRolDirecto('${user.id}', '${user.email}')">✖</button>
      </div>
    `;
  });
};


window.cambiarRolDirecto = async (id, email) => {

  await supabase
    .from("perfiles")
    .update({ rol: "user" })
    .eq("id", id);

  cargarAdmins();
};

