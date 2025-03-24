<template>
  <div class="bg-gray-500 min-h-screen p-4">
    <h1 class="text-3xl text-center text-black mb-8">
      Instances of Radiation Producing Equipment Per Borough
    </h1>
    <div class="h-full w-full max-w-2xl mx-auto">
      <DoughnutChart
        v-if="amts.length > 0"
        :data="amts"
        :labels="['Brooklyn', 'Manhattan', 'Staten Island', 'Bronx', 'Queens']"
      />
    </div>
  </div>
</template>

<script setup>
import DoughnutChart from '@/components/DoughnutChart.vue'
import { onMounted, ref } from 'vue'

const allData = ref([])
const amts = ref([])

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
  let boroughCounts = {
    BK: 0,
    BX: 0,
    MN: 0,
    QN: 0,
    SI: 0,
  }

  data.forEach((item) => {
    const nta = item.nta.slice(0, 2)
    switch (nta) {
      case 'BK':
        boroughCounts.BK++
        break
      case 'BX':
        boroughCounts.BX++
        break
      case 'MN':
        boroughCounts.MN++
        break
      case 'QN':
        boroughCounts.QN++
        break
      case 'SI':
        boroughCounts.SI++
        break
      default:
        break
    }
  })
  return [boroughCounts.BK, boroughCounts.MN, boroughCounts.SI, boroughCounts.BX, boroughCounts.QN]
}

onMounted(() => {
  fetchAllData().then(() => {
    amts.value = getAmounts(allData.value)
  })
})
</script>
