import { supabase } from "./supabase.js";

(async () => {

  document.body.style.display = "none";

  // =======================
  // 1. VERIFICAR SESIÓN
  // =======================
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;

  if (!session) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // =======================
  // 2. OBTENER USUARIO
  // =======================
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = "/luna-blanca/index.html";
    return;
  }

  // =======================
  // 3. VERIFICAR ROL
  // =======================
  const { data: perfil } = await supabase
    .from("perfiles")
    .select("rol")
    .eq("id", user.id)
    .single();

  if (!perfil || perfil.rol !== "admin") {
    window.location.href = "/luna-blanca/luna-blanca.html";
    return;
  }

  // =======================
  // 4. MOSTRAR PANEL
  // =======================
  document.body.style.display = "block";

  cargarPendientes();
  cargarAdmins();

})();


// =======================
// 🟢 PENDIENTES
// =======================
const cargarPendientes = async () => {

  const { data, error } = await supabase
    .from("perfiles")
    .select("*")
    .or("aprobado.eq.false,aprobado.is.null");

  console.log("PENDIENTES:", data);
  console.log("ERROR:", error);

  if (error) return;

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


// =======================
// ✔ APROBAR USUARIO
// =======================
window.aprobar = async (id, email) => {

  const { error } = await supabase
    .from("perfiles")
    .update({ aprobado: true })
    .eq("id", id);

  if (error) return;

  await fetch("/functions/v1/send-approved-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  });

  cargarPendientes();
};


// =======================
// ❌ RECHAZAR USUARIO
// =======================
window.rechazar = async (id) => {

  const { error } = await supabase
    .from("perfiles")
    .delete()
    .eq("id", id);

  if (error) return;

  cargarPendientes();
};


// =======================
// 🔵 CAMBIAR ROL (INPUT)
// =======================
window.cambiarRol = async () => {

  const email = document.getElementById("emailRol").value;

  const { data: perfil, error } = await supabase
    .from("perfiles")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !perfil) {
    alert("Correo no existe");
    return;
  }

  const nuevoRol = perfil.rol === "admin" ? "user" : "admin";

  await supabase
    .from("perfiles")
    .update({ rol: nuevoRol })
    .eq("id", perfil.id);

  cargarAdmins();
};


// =======================
// 👑 LISTA DE ADMINS
// =======================
const cargarAdmins = async () => {

  const { data, error } = await supabase
    .from("perfiles")
    .select("*")
    .eq("rol", "admin");

  if (error) return;

  const contenedor = document.getElementById("admins");
  contenedor.innerHTML = "";

  (data || []).forEach(user => {

    contenedor.innerHTML += `
      <div>
        <span>${user.email}</span>
        <button onclick="cambiarRolDirecto('${user.id}')">✖</button>
      </div>
    `;
  });
};


// =======================
// ❌ QUITAR ADMIN
// =======================
window.cambiarRolDirecto = async (id) => {

  await supabase
    .from("perfiles")
    .update({ rol: "user" })
    .eq("id", id);

  cargarAdmins();
};


// =======================
// 🔁 CAMBIAR PANELES UI
// =======================
window.mostrarPanel = (panel) => {

  document.querySelectorAll(".panel")
    .forEach(p => p.classList.remove("activa"));

  document.getElementById(`panel-${panel}`)
    .classList.add("activa");

};
