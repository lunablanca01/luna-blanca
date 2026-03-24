import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const supabase = createClient(
  "https://qaophiaogsvhkgmbfcuf.supabase.co",
  "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
);

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
