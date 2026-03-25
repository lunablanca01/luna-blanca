async function ponerIconosEstado(){
  const { supabase } = await import("./supabase.js");

  // obtener usuario logueado
  const { data: { user } } = await supabase.auth.getUser();
  if(!user) return;

  // traer todos los estados de lectura del usuario
  const { data: lecturas, error } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id);

  if(error){ console.error(error); return; }

  // recorrer todas las tarjetas
  document.querySelectorAll(".card").forEach(card => {
    const novelaId = card.dataset.novela;
    if(!novelaId) return;

    const lectura = lecturas.find(l => l.novela === novelaId);
    if(!lectura) return;

    let icono = "";
    if(lectura.estado === "leido") icono = "✔️";
    else if(lectura.estado === "leyendo") icono = "⏳";
    else if(lectura.estado === "por-leer") icono = "❌";

    if(icono){
      const badge = document.createElement("div");
      badge.className = "estado-icono";
      badge.textContent = icono;

      card.style.position = "relative"; // para que el icono quede en la esquina
      badge.style.position = "absolute";
      badge.style.top = "5px";
      badge.style.right = "5px";
      badge.style.fontSize = "20px";

      card.appendChild(badge);
    }
  });
}