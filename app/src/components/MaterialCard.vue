<template>
  <div class="bg-gray-400">
    <h1>{{ id }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
})
</script>
