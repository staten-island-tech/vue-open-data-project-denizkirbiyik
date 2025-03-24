<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-500 min-h-screen">
    <header>
      <div class="wrapper">
        <nav class="space-x-4">
          <RouterLink class="ml-3" to="/">Home</RouterLink>
          <RouterLink to="/chart1">Chart 1</RouterLink>
          <RouterLink to="/chart2">Chart 2</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
