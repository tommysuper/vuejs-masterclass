<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectColumns'
usePageStore().pageData.title = 'Porjects'
const projectLoader = userProjectsStore()

const { projects } = storeToRefs(projectLoader)
const { getProjects } = projectLoader
await getProjects()
</script>
<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
