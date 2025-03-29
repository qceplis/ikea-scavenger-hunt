import { createClient } from "@supabase/supabase-js";

const createSupabase = () => {
  const runtimeConfig = useRuntimeConfig()

  const supabaseUrl = runtimeConfig.public.supabaseURL;
  const supabaseKey = runtimeConfig.app.supabaseKey;

  const supabase = createClient(supabaseUrl, supabaseKey);
  return supabase;
}

export const useSupabase = () => createSupabase()
