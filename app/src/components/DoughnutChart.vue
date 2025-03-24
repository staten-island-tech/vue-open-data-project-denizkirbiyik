<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement)
const props = defineProps({
  data: Array,
  labels: Array,
})
const chartData = ref({
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: [
        'rgb(255, 99, 20)',
        'rgb(54, 40, 100)',
        'rgb(255, 205, 86)',
        'rgb(46, 205, 86)',
        'rgb(76, 205, 255)',
      ],
    },
  ],
})
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'black',
      },
    },
    tooltip: {
      bodyColor: 'white',
      titleColor: 'white',
    },
  },
}

watch(
  () => props.data,
  (newData) => {
    chartData.value.datasets[0].data = newData
  },
  { immediate: true },
)
</script>
