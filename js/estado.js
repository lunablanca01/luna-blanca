// estado.js
import { supabase } from "./supabase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("contenedor-tarjetas");
  if(!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");
  if(cards.length === 0) return; // aún no hay tarjetas

  if(location.protocol === "file:") return;

  const { data:{user} } = await supabase.auth.getUser();
  if(!user) return;

  for(const card of cards){
    const tituloCard = card.querySelector("h3")?.textContent.trim();
    if(!tituloCard) continue;

    const { data } = await supabase.from("lecturas")
      .select("*")
      .eq("usuario_id", user.id)
      .eq("novela", tituloCard)
      .maybeSingle();

    const estadoLectura = data?.estado || "Por leer";

    const divEstado = document.createElement("div");
    divEstado.className = "estado-lectura";

    let emoji = "";
    if(estadoLectura === "por leer") emoji = "📖";
    if(estadoLectura === "leyendo") emoji = "🔖";
    if(estadoLectura === "leído") emoji = "✅";

    divEstado.textContent = `${emoji} ${estadoLectura}`;

    // Insertar al inicio de la tarjeta
    card.insertAdjacentElement("afterbegin", divEstado);
  }
});
