<script setup lang="ts">
import { ProjectsQuerys, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectColumns'
usePageStore().pageData.title = 'Porjects'
const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error, status } = await ProjectsQuerys
  if (error) useErrorStore().setError({ error, customCode: status })

  projects.value = data
}

await getProjects()
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
