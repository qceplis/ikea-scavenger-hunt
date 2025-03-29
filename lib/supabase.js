import { createClient } from "@supabase/supabase-js";
const runtimeConfig = useRuntimeConfig()

const supabaseUrl = runtimeConfig.public.supabaseURL;
const supabaseKey = runtimeConfig.app.supabaseKey;

console.log("env vars: ", supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);