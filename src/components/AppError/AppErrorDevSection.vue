<script setup lang="ts">
defineProps<{
  msg: string
  customCode: number
  statusCode: number
  hint: string | null
  details: string
  code: string
}>()
</script>
<template>
  <section class="error">
    <div>
      <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
      <h1 class="error__code">{{ customCode || code }}</h1>
      <p v-if="statusCode" class="error__code">Status Code: {{ statusCode }}</p>
      <p class="error__msg">{{ msg }}</p>
      <p v-if="hint" class="error__msg">Hint: {{ hint }}</p>
      <p v-if="details" class="error__msg">Details: {{ details }}</p>
      <div class="error-footer">
        <p class="error-footer__text">You'll find lots to explore on the home page.</p>
        <RouterLink to="/">
          <Button class="max-w-36"> Back to homepage </Button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
