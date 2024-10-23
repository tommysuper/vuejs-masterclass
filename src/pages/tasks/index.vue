<script setup lang="ts">
import { TasksWithProjectsQuery } from '@/utils/supaQueries'
import { type TasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/taskColumns'
usePageStore().pageData.title = 'Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error, status } = await TasksWithProjectsQuery
  if (error) {
    useErrorStore().setError({ error, customCode: status })
  }

  tasks.value = data
}

await getTasks()
</script>
<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
