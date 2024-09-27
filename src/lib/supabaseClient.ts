import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://qivkdrsvpgwcufoijsdy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpdmtkcnN2cGd3Y3Vmb2lqc2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MDc3NjYsImV4cCI6MjA0Mjk4Mzc2Nn0.rsJOEuBZQNwxgcWzc3JIKoxXS50oDllp3C5cZ7MXxcI'
)
