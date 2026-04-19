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

  await Promise.all([
    cargarPendientes(),
    cargarAdmins(),
    cargarUsuarios()
  ]);

})();


// =======================
// 🟢 PENDIENTES
// =======================
const cargarPendientes = async () => {

  const { data, error } = await supabase
    .from("perfiles")
    .select("*")
    .or("aprobado.eq.false,aprobado.is.null");

  if (error) {
    console.error("ERROR SUPABASE:", error);
    return;
  }

  const contenedor = document.getElementById("pendientes");
  contenedor.innerHTML = "";

  (data || []).forEach(user => {

    contenedor.innerHTML += `
      <div>
        <span>${user.email}</span>

        <button class="btn-approve" onclick="aprobar('${user.id}', '${user.email}')">✔</button>
        <button class="btn-reject" onclick="rechazar('${user.id}')">✖</button>
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

  if (error) {
    console.error("Error aprobando:", error);
    mostrarToast("Error al aprobar ❌", "error");
    return;
  }

  try {
    const res = await fetch("https://qaophiaogsvhkgmbfcuf.supabase.co/functions/v1/send-approved-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN",
        "Authorization": "Bearer sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
      },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    console.log("Correo enviado:", data);

  } catch (err) {
    console.error("Error enviando correo:", err);
  }

  cargarPendientes();
};


// =======================
// ❌ RECHAZAR USUARIO
// =======================
window.rechazar = async (id) => {

  const confirmar = confirm("¿Eliminar usuario definitivamente?");
  if (!confirmar) return;

  try {
    const res = await fetch("https://qaophiaogsvhkgmbfcuf.supabase.co/functions/v1/delete-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN",
        "Authorization": "Bearer sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
      },
      body: JSON.stringify({ user_id: id })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error eliminando usuario");
    }

    mostrarToast("Usuario eliminado correctamente ✅");

  } catch (err) {
    console.error("Error eliminando:", err);
    mostrarToast("Error al eliminar ❌", "error");
  }

  cargarPendientes();
  cargarUsuarios();
  cargarAdmins();
};


// =======================
// 🔵 CAMBIAR ROL
// =======================
window.cambiarRol = async () => {

  const input = document.getElementById("emailRol");
  const email = input.value;

  const { data: perfil, error } = await supabase
    .from("perfiles")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !perfil) {
    mostrarToast("Correo no existe ❌", "error");
    return;
  }

  const nuevoRol = perfil.rol === "admin" ? "user" : "admin";

  await supabase
    .from("perfiles")
    .update({ rol: nuevoRol })
    .eq("id", perfil.id);

  cargarAdmins();

  input.value = "";
};


// =======================
// 👑 ADMINS
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
        <button class="btn-reject" onclick="cambiarRolDirecto('${user.id}')">✖</button>
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
// 👥 USUARIOS
// =======================
const cargarUsuarios = async () => {

  const { data, error } = await supabase
    .from("perfiles")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  const contenedor = document.getElementById("listaUsuarios");
  contenedor.innerHTML = "";

  (data || []).forEach(user => {

    contenedor.innerHTML += `
      <div class="fila-user">
        <span>${user.email}</span>
        <span>(${user.rol})</span>

        <button class="btn-reject" onclick="eliminarUsuario('${user.id}')">✖</button>
      </div>
    `;
  });
};


// =======================
// ❌ ELIMINAR USUARIO
// =======================
window.eliminarUsuario = async (id) => {

  const confirmar = confirm("¿Eliminar usuario completamente?");
  if (!confirmar) return;

  try {
    const res = await fetch("https://qaophiaogsvhkgmbfcuf.supabase.co/functions/v1/delete-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN",
        "Authorization": "Bearer sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
      },
      body: JSON.stringify({ user_id: id })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error eliminando usuario");
    }

    mostrarToast("Usuario eliminado correctamente ✅");

  } catch (err) {
    console.error(err);
    mostrarToast("Error al eliminar ❌", "error");
  }

  cargarUsuarios();
};


// =======================
// 🔁 TOAST
// =======================
function mostrarToast(mensaje, tipo = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = mensaje;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


// =======================
// 🔁 PANELES
// =======================
window.mostrarPanel = (panel) => {

  document.querySelectorAll(".panel")
    .forEach(p => p.classList.remove("activa"));

  document.getElementById(`panel-${panel}`)
    .classList.add("activa");
};
