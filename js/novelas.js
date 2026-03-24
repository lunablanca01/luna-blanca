/* ================================
   🧰 NOVELAS.JS - Local y Supabase
================================ */

document.addEventListener("DOMContentLoaded", function() {

  // -------------------------------
  // 🔢 1. CAPÍTULOS
  // -------------------------------
  const capElem = document.querySelector(".capitulos");
  let totalCap = 0;

  if(capElem){
    const numeros = capElem.textContent.match(/\d+/g);
    if(numeros){
      totalCap = numeros.reduce(function(acc, num){ return acc + parseInt(num); }, 0);
      const totalCapElem = document.getElementById("total-capitulos");
      if(totalCapElem) totalCapElem.textContent = totalCap;

      const inputProgreso = document.getElementById("progreso-capitulo");
      if(inputProgreso) inputProgreso.max = totalCap;
    }
  }

  // -------------------------------
  // 🏷️ 2. ETIQUETAS / EPUB
  // -------------------------------
  const tituloActual = document.querySelector("h1")?.textContent.trim();

  if (tituloActual && typeof tarjetasHTML !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(tarjetasHTML, "text/html");
    const cards = doc.querySelectorAll(".card");

    let tarjetaCoincidente = null;
    cards.forEach(function(card){
      const nombreCard = card.querySelector("h3")?.textContent.trim();
      if(nombreCard === tituloActual) tarjetaCoincidente = card;
    });

    if(tarjetaCoincidente){
      const tagsEncontrados = tarjetaCoincidente.dataset.tags;
      if(tagsEncontrados){
        const tagsArray = tagsEncontrados.toLowerCase().split(" ");
        const tipo = tagsArray[0] || "";
        const estado = tagsArray[1] || "";
        const ambientado = tagsArray[2] || "";
        const categorias = tagsArray.slice(3);

        const contenedor = document.querySelector(".etiquetas");
        if(contenedor){
          contenedor.innerHTML = `
            <span>Tipo: <a href="../luna-blanca.html?tipo=${tipo}">${obtenerNombreTag(tipo)}</a></span>
            <span>Estado: <a href="../luna-blanca.html?estado=${estado}">${obtenerNombreTag(estado)}</a></span>
            <span>Ambientado: <a href="../luna-blanca.html?ambientado=${ambientado}">${obtenerNombreTag(ambientado)}</a></span>
            <br>
            <div class="lista-etiquetas">
              Etiqueta:
              ${categorias.map(function(cat){
                return `<a href="../luna-blanca.html?categoria=${cat}">${obtenerNombreTag(cat)}</a>`;
              }).join("")}
            </div>
          `;
        }
      }

      const linkEpub = tarjetaCoincidente.querySelector(".links-tarjeta a")?.href;
      const contenedorEpub = document.getElementById("epub-container");
      if(linkEpub && contenedorEpub){
        contenedorEpub.innerHTML = `
          <div class="epub">
            Leer en: <a href="${linkEpub}" target="_blank">ePub</a>
          </div>
        `;
      }
    }
  }

  // -------------------------------
  // 👤 3. AUTOR
  // -------------------------------
  if(typeof cargarAutor === "function") cargarAutor();

  // -------------------------------
  // 💾 4. SUPABASE / LECTURA
  // -------------------------------
  (function(){
    const esLocal = location.protocol === "file:";
    const supabaseDisponible = !esLocal && window.supabase;

    const selectEstado = document.getElementById("estado-lectura");
    const inputProgreso = document.getElementById("progreso-capitulo");
    const btnGuardar = document.getElementById("guardar-lectura");

    if(!selectEstado || !inputProgreso || !btnGuardar) return;

    if(!supabaseDisponible){
      // Modo local
      console.log("Modo local: Supabase desactivado");
      btnGuardar.addEventListener("click", function(){
        mostrarToast("Modo local (no se guarda)", "ok");
      });
      return;
    }

    // -------------------------------
    // 🔹 Supabase activo
    // -------------------------------
    async function cargarSupabase() {
      const { data: { user } } = await supabase.auth.getUser();
      if(!user) return;

      // Cargar estado/progreso
      const { data } = await supabase
        .from("lecturas")
        .select("*")
        .eq("usuario_id", user.id)
        .eq("novela", tituloActual)
        .maybeSingle();

      if(data){
        selectEstado.value = data.estado;
        inputProgreso.value = data.progreso;
      }

      // Guardar
      btnGuardar.addEventListener("click", async function(){
        const valor = parseInt(inputProgreso.value);
        if(isNaN(valor)){
          alert("Ingresa un número válido");
          return;
        }

        const { error } = await supabase.from("lecturas").upsert(
          {
            usuario_id: user.id,
            novela: tituloActual,
            estado: selectEstado.value,
            progreso: valor
          },
          { onConflict: ["usuario_id", "novela"] }
        );

        if(!error){
          mostrarToast("Guardado", "ok");
        } else {
          mostrarToast("Error al guardar", "error");
        }
      });
    }

    cargarSupabase();

  })(); // fin de supabase
});
