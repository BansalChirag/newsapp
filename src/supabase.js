import { createClient } from "@supabase/supabase-js";


export const supabaseUrl = import.meta.env.VITE_API_SUPABASE_URL

const supabaseKey = import.meta.env.VITE_API_SUPABASE_KEY


const supabase = createClient(supabaseUrl,supabaseKey);

export default supabase;