import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uxcnqtapkghksahxzcco.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Y25xdGFwa2doa3NhaHh6Y2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNjIwMTcsImV4cCI6MjA0MzkzODAxN30.bsofBcoJ2-3C5JWK0R3ulpwi9_O7JyaIzEm2JjfFZRE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
