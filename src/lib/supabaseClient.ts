import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_SUPERBASE_URL,
  import.meta.env.VITE_SUPERBASE_KEY
)
