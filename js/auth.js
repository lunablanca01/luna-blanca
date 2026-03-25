import { supabase } from "./supabase.js";

// 🔒 SE EJECUTA AUTOMÁTICAMENTE
(async () => {
  document.body.style.display = "none";

  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    window.location.href = "/luna-blanca/index.html";
  } else {
    document.body.style.display = "block";
  }
})();
