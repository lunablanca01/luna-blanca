import { supabase } from "./supabase.js";
import { novelas } from "./tarjetas.js";

(async () => {

  console.log("🚀 Iniciando migración...");

  // 1. Obtener todas las lecturas
  const { data: lecturas, error } = await supabase
    .from("lecturas")
    .select("*");

  if (error) {
    console.error("❌ Error cargando lecturas:", error);
    return;
  }

  console.log("📚 Lecturas encontradas:", lecturas.length);

  // 2. Recorrer cada lectura
  for (const lectura of lecturas) {

    // Buscar novela por título
    const novelaData = novelas.find(
      n => n.titulo.trim().toLowerCase() === lectura.novela.trim().toLowerCase()
    );

    if (!novelaData) {
      console.warn("❌ No se encontró:", lectura.novela);
      continue;
    }

    if (!novelaData.novela_id) {
      console.warn("⚠️ Sin novela_id:", novelaData.titulo);
      continue;
    }

    // 3. Actualizar en Supabase
    const { error: updateError } = await supabase
      .from("lecturas")
      .update({ novela_id: novelaData.novela_id })
      .eq("usuario_id", lectura.usuario_id)
      .eq("novela", lectura.novela);

    if (updateError) {
      console.error("❌ Error actualizando:", lectura.novela, updateError);
    } else {
      console.log("✅ Actualizado:", lectura.novela);
    }
  }

  console.log("🎉 Migración terminada");
})();