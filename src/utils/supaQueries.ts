import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const TasksWithProjectsQuery = supabase.from('tasks').select(
  `*,
      projects(
      id,
      name,
      slug
      )
      `
)
export type TasksWithProjects = QueryData<typeof TasksWithProjectsQuery>

export const ProjectQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof ProjectQuery>
