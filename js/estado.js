// estado.js
import { supabase } from "./supabase.js"; // solo remoto

(async function(){
  console.log("estado.js cargado ✅");

  if(location.protocol === "file:") return;

  const { data:{user} } = await supabase.auth.getUser();
  if(!user) return;

  const tituloActual = document.querySelector("h1")?.textContent.trim();
  if(!tituloActual) return;

  const selectEstado = document.getElementById("estado-lectura");
  const inputProgreso = document.getElementById("progreso-capitulo");
  const btnGuardar = document.getElementById("guardar-lectura");
  if(!selectEstado || !inputProgreso) return;

  // Traer estado y progreso
  const { data } = await supabase.from("lecturas")
    .select("*")
    .eq("usuario_id", user.id)
    .eq("novela", tituloActual)
    .maybeSingle();

  if(data){
    selectEstado.value = data.estado;
    inputProgreso.value = data.progreso;
  }

  // Guardar cambios
  if(btnGuardar){
    btnGuardar.addEventListener("click", async ()=>{
      const valor = parseInt(inputProgreso.value);
      if(isNaN(valor)){ alert("Ingresa un número válido"); return; }

      const { error } = await supabase.from("lecturas").upsert(
        { usuario_id: user.id, novela: tituloActual, estado: selectEstado.value, progreso: valor },
        { onConflict: ["usuario_id","novela"] }
      );

      if(!error) console.log("Guardado ✅");
      else console.log("Error ❌");
    });
  }

})();
