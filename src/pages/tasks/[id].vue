<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div>
    <h1>Task {{ route.params?.id }}</h1>
    <router-link to="/"> Go to Home</router-link>
  </div>
</template>
