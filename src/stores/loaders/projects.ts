import type { Projects } from '@/utils/supaQueries'
import { projectsQuerys } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'

export const userProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null)
  const loadPorjects = useMemoize(async (key: string) => await projectsQuerys)

  const validateCache = () => {
    if (projects.value?.length) {
      projectsQuerys.then(({ data }) => {
        if (JSON.stringify(projects.value) === JSON.stringify(data)) {
          console.log('Cached and freshed data matched!')
          return
        } else {
          loadPorjects.delete('project')
          console.log('Something has changed')
        }
      })
    }
  }

  const getProjects = async () => {
    const { data, error, status } = await loadPorjects('project')
    if (error) useErrorStore().setError({ error, customCode: status })

    projects.value = data
    validateCache()
  }

  return {
    projects,
    getProjects
  }
})
