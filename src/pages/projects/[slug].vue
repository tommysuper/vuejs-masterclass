<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div>
    <h1>Project {{ route.params?.slug }}</h1>
    <router-link to="/"> Go to Home</router-link>
  </div>
</template>
