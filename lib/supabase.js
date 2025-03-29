import { createClient } from "@supabase/supabase-js";

let supabase = null;

const createSupabase = () => {
  if (! supabase) {
    const runtimeConfig = useRuntimeConfig()

    const supabaseUrl = runtimeConfig.public.supabaseURL;
    const supabaseKey = runtimeConfig.public.supabaseKey;

    supabase = createClient(supabaseUrl, supabaseKey);
  }
  
  return supabase;
}

export const useSupabase = () => createSupabase()
