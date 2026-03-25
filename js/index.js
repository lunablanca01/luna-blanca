// =======================
// REGISTRO
// =======================
window.registrar = async () => {
  const email = document.getElementById("emailRegistro").value;
  const password = document.getElementById("passwordRegistro").value;
  const nombre = document.getElementById("nombreRegistro").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  console.log("SIGNUP DATA:", data);
  console.log("SIGNUP ERROR:", error);

  if (error) {
    document.getElementById("mensaje").innerText = error.message;
    return;
  }

  const user = data.user ?? data.session?.user;

  console.log("USER:", user);

  if (!user) {
    document.getElementById("mensaje").innerText =
      "Error al crear usuario";
    return;
  }

  // 🔥 Ahora guardamos también el nombre
  const { error: perfilError } = await supabase
    .from("perfiles")
    .insert({
      id: user.id,
      email: email,
      nombre: nombre,
      aprobado: false
    });

  console.log("INSERT ERROR:", perfilError);

  if (perfilError) {
    document.getElementById("mensaje").innerText =
      "Usuario creado, pero error al guardar perfil";
    return;
  }

  document.getElementById("mensaje").innerText =
    "Registro exitoso, espera aprobación ⏳";
};
