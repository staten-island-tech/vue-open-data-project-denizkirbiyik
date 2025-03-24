<template>
  <div class="bg-gray-500 min-h-screen p-4">
    <h1 class="text-3xl text-center text-black mb-8">
      Instances of Radiation Producing Equipment Per Facility Type
    </h1>
    <div class="h-full w-full max-w-2xl mx-auto">
      <BarChart v-if="amts.length > 0" :data="amts" :labels="facilityTypes" />
    </div>
  </div>
</template>

<script setup>
import BarChart from '@/components/BarChart.vue'
import { onMounted, ref } from 'vue'

const allData = ref([])
const amts = ref([])
const facilityTypes = ref([])

async function fetchAllData() {
  for (let offset = 0; offset < 6444; offset += 1000) {
    try {
      const url = `https://data.cityofnewyork.us/resource/i595-2byq.json?$offset=${offset}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()
      allData.value = allData.value.concat(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
}

function getAmounts(data) {
  let facilityCounts = {}

  data.forEach((item) => {
    const facilityType = item.facility_type
    if (facilityType) {
      facilityCounts[facilityType] = (facilityCounts[facilityType] || 0) + 1
    }
  })

  const types = Object.keys(facilityCounts)
  const counts = types.map((type) => facilityCounts[type])

  facilityTypes.value = types
  return counts
}

onMounted(() => {
  fetchAllData().then(() => {
    amts.value = getAmounts(allData.value)
  })
})
</script>
