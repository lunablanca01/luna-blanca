// 🔌 supabase.js - solo para remoto
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const supabase = createClient(
  "https://qaophiaogsvhkgmbfcuf.supabase.co",
  "sb_publishable_CAkCS2tdVxztSVlOt7tVNg_x2zuUTDN"
);