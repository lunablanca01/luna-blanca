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


const cargarUsuarios = async () => {

  const { data } = await supabase
    .from("perfiles")
    .select("*")
    .eq("aprobado", false);

  const contenedor = document.getElementById("listaUsuarios");
  contenedor.innerHTML = "";

  data.forEach(user => {
    contenedor.innerHTML += `
      <div>
        <p>${user.email}</p>
        <button onclick="aprobarUsuario('${user.id}', '${user.email}')">
          Aprobar
        </button>
      </div>
    `;
  });
};


window.aprobarUsuario = async (id, email) => {

  await supabase
    .from("perfiles")
    .update({ aprobado: true })
    .eq("id", id);

  await fetch('/functions/v1/send-approval-email', {
    method: 'POST',
    body: JSON.stringify({ email })
  });

  alert("Usuario aprobado");
};
