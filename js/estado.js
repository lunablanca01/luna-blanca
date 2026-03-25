// estado.js
import { supabase } from "./supabase.js"; // si usas supabase

export async function ponerIconosEstado(){
  console.log("ponerIconosEstado ejecutada ✅");

  const contenedor = document.getElementById("contenedor-tarjetas");
  if(!contenedor) return;

  const cards = contenedor.querySelectorAll(".card");

  // etiquetas locales
  cards.forEach(card => {
    if(card.querySelector(".estado")) return;
    const tags = (card.dataset.tags || "").toLowerCase();
    let estadoTexto = "";
    let estadoClase = "";

    if(tags.includes("finalizado")) { estadoTexto="Finalizado"; estadoClase="estado-finalizado"; }
    if(tags.includes("en-proceso")) { estadoTexto="En proceso"; estadoClase="estado-proceso"; }
    if(tags.includes("mtl")) { estadoTexto="MTL"; estadoClase="estado-mtl"; }
    if(tags.includes("pendiente")) { estadoTexto="Pendiente"; estadoClase="estado-pendiente"; }

    if(estadoTexto){
      const etiqueta = `<div class="estado ${estadoClase}">${estadoTexto}</div>`;
      card.insertAdjacentHTML("afterbegin", etiqueta);
    }
  });

  // aquí va tu código de supabase para cargar el estado y progreso
  if(location.protocol !== "file:"){
    const { data:{user} } = await supabase.auth.getUser();
    if(!user) return;

    const tituloActual = document.querySelector("h1")?.textContent.trim();
    if(!tituloActual) return;

    const selectEstado = document.getElementById("estado-lectura");
    const inputProgreso = document.getElementById("progreso-capitulo");
    const btnGuardar = document.getElementById("guardar-lectura");
    if(!selectEstado || !inputProgreso) return;

    const { data } = await supabase.from("lecturas")
      .select("*")
      .eq("usuario_id", user.id)
      .eq("novela", tituloActual)
      .maybeSingle();

    if(data){
      selectEstado.value = data.estado;
      inputProgreso.value = data.progreso;
    }

    if(btnGuardar){
      btnGuardar.addEventListener("click", async ()=>{
        const valor = parseInt(inputProgreso.value);
        if(isNaN(valor)){ alert("Ingresa un número válido"); return; }

        const { error } = await supabase.from("lecturas").upsert(
          { usuario_id: user.id, novela: tituloActual, estado: selectEstado.value, progreso: valor },
          { onConflict: ["usuario_id","novela"] }
        );

        if(!error) console.log("Guardado ✅");
        else console.log("Error al guardar ❌");
      });
    }
  }
}
