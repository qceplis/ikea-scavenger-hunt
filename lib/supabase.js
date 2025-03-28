import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

const supabaseUrl = 'https://fbwygtderqyjezkbshao.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZid3lndGRlcnF5amV6a2JzaGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDc4MzgsImV4cCI6MjA1NzkyMzgzOH0.ePBrIRLD1NJG13zlThloMoHbRp3pGQBaGD93_Kpcxyo'

// console.log(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);