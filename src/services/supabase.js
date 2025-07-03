import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://uxcnqtapkghksahxzcco.supabase.co";
export const supabaseUrl = "https://osijcstvyehwwicombzu.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Y25xdGFwa2doa3NhaHh6Y2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNjIwMTcsImV4cCI6MjA0MzkzODAxN30.bsofBcoJ2-3C5JWK0R3ulpwi9_O7JyaIzEm2JjfFZRE";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zaWpjc3R2eWVod3dpY29tYnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MzQ3MjIsImV4cCI6MjA2NzExMDcyMn0.0Xrj66dnZRoDWtXtmN5hTTE47IaCkOzL2_BNLu4yJ7g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
