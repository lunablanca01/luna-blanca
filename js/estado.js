// estado.js
export async function mostrarEstadoLectura() {
  if(location.protocol === "file:") return;

  const { supabase } = await import("./supabase.js");
  const { data:{user} } = await supabase.auth.getUser();
  if(!user) return;

  const tituloActual = document.querySelector("h1")?.textContent.trim();
  if(!tituloActual) return;

  const contenedor = document.getElementById("contenedor-tarjetas");
  if(!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  for(const card of cards){
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if(tituloCard === tituloActual){
      const { data } = await supabase.from("lecturas")
        .select("*")
        .eq("usuario_id", user.id)
        .eq("novela", tituloActual)
        .maybeSingle();

      const estadoLectura = data?.estado || "Por leer";

      // Creamos un div dentro de la tarjeta
      const divEstado = document.createElement("div");
      divEstado.className = "estado-lectura";

      // Emoji opcional para más visual
      let emoji = "";
      if(estadoLectura === "por leer") emoji = "📖";
      if(estadoLectura === "leyendo") emoji = "🔖";
      if(estadoLectura === "leído") emoji = "✅";

      divEstado.textContent = `${emoji} ${estadoLectura}`;

      // Insertar **al inicio de la tarjeta**, antes de la imagen
      card.insertAdjacentElement("afterbegin", divEstado);
    }
  }
}
