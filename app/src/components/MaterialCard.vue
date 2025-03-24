<template>
  <div class="bg-gray-400 w-full max-w-sm m-4 p-3 rounded-lg">
    <h2 class="text-xl font-bold">{{ props.data.name }}</h2>
    <p><strong>Address:</strong> {{ props.data.address }}</p>
    <p><strong>Borough:</strong> {{ props.data.borough }}</p>
    <p><strong>Zipcode:</strong> {{ props.data.zipcode }}</p>
    <p><strong>Facility Type:</strong> {{ props.data.facility_type }}</p>
    <p><strong>Latitude:</strong> {{ props.data.latitude }}</p>
    <p><strong>Longitude:</strong> {{ props.data.longitude }}</p>
    <p><strong>Community Board:</strong> {{ props.data.community_board }}</p>
    <p><strong>Council District:</strong> {{ props.data.council_district }}</p>
    <p><strong>Census Tract:</strong> {{ props.data.census_tract }}</p>
    <p><strong>BIN:</strong> {{ props.data.bin }}</p>
    <p><strong>BBL:</strong> {{ props.data.bbl }}</p>
    <p><strong>NTA:</strong> {{ props.data.nta }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
})
</script>
