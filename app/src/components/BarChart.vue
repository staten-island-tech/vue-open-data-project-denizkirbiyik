<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { defineProps, watch, ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Tooltip, BarElement, CategoryScale, LinearScale)
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
  scales: {
    x: {
      ticks: {
        color: 'black',
      },
    },
    y: {
      ticks: {
        color: 'black',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
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
