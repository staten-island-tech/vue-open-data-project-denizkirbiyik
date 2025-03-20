<template>
  <div class="bg-gray-400 w-100 h-75 m-4 rounded-xl">
    <h1>{{ id }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
})
</script>
