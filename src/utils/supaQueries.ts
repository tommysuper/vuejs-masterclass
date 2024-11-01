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

export const taskQuery = (id: string) =>
  supabase
    .from('tasks')
    .select(
      `
  *,
  projects(
      id,
      name,
      slug
      )
  `
    )
    .eq('id', id)
    .single()

export type Task = QueryData<ReturnType<typeof taskQuery>>

export const projectsQuerys = supabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuerys>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
  *,
  tasks (
  id,
  name,
  status,
  due_date
  )
  `
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

export const profileQuery = ({ column, value }: { column: string; value: string }) =>
  supabase.from('profiles').select().eq(column, value).single()
