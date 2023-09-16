import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const url = import.meta.env.VITE_SUPABASE_URL;
const secret = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(url, secret);
