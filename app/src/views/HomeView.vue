<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import MaterialCard from '@/components/MaterialCard.vue'
import TopHomeBar from '@/components/TopHomeBar.vue'

const route = useRoute()
const data = ref([])

const amt = route.params.amt || 50
const offset = route.params.offset || 0

async function fetchData(amt, offset) {
  const url = `https://data.cityofnewyork.us/resource/i595-2byq.json?$limit=${amt}&$offset=${offset}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    data.value = await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => fetchData(amt, offset))

onBeforeRouteUpdate((to) => {
  fetchData(to.params.amt, to.params.offset)
})
</script>

<template>
  <main>
    <TopHomeBar :curAmt="amt" :curOffset="offset" />
    <div class="flex flex-wrap justify-center">
      <MaterialCard v-for="place in data" :key="place.id" :data="place" />
    </div>
  </main>
</template>
