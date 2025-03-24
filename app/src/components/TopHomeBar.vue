<template>
  <div class="space-x-4 flex justify-center items-center p-4 text-black">
    <p>Entries per page:</p>
    <select v-model="selectedAmt" class="w-20 max-w-xs p-2 border border-black rounded-lg text-lg">
      <option class="bg-gray-400" v-for="amount in amounts" :value="amount" :key="amount">
        {{ amount }}
      </option>
    </select>
    <div class="h-10 w-[1px] bg-black shrink-0"></div>

    <p>Page Number:</p>
    <input
      type="number"
      v-model="selectedPage"
      :min="1"
      :max="Math.ceil(6444 / selectedAmt)"
      class="w-20 max-w-xs p-2 border border-black rounded-lg text-lg text-center focus:outline-none focus:ring-0"
    />
    <div class="h-10 w-[1px] bg-black shrink-0"></div>

    <p class="min-w-[200px]">
      Showing entries {{ Number(selectedPage) * Number(selectedAmt) - Number(selectedAmt) + 1 }}-{{
        Number(selectedPage) * Number(selectedAmt) > 6444
          ? 6444
          : Number(selectedPage) * Number(selectedAmt)
      }}
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['curOffset', 'curAmt'])

const selectedAmt = ref(props.curAmt)
const selectedPage = ref(props.curOffset / props.curAmt + 1)
const amounts = ref([10, 20, 25, 50, 100])

watch(selectedAmt, () => {
  router.push({
    name: 'home',
    params: { amt: selectedAmt.value, offset: 0 },
  })
  selectedPage.value = 1
})
watch(selectedPage, () => {
  router.push({
    name: 'home',
    params: {
      amt: selectedAmt.value,
      offset: selectedPage.value * selectedAmt.value - selectedAmt.value,
    },
  })
})
</script>
