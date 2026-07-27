<script setup lang="ts">
import MapInfo from '@/components/MapInfo.vue'
import PageTitle from '@/components/PageTitle.vue'
import type { MapMarker } from '@/stores/MapMarker'
import { computed } from 'vue'
const props = defineProps({
  apiKey: {
    type: String,
    required: true,
  },
  mapID: {
    type: String,
    required: true,
  },
  center: {
    type: Object as () => { lat: number; lng: number },
    required: false,
  },
  zoom: {
    type: Number,
    required: false,
    default: 10,
  },
  markers: {
    type: Array as () => MapMarker[],
    required: false,
  },
})

const center = computed(() => {
  if (!props.markers || props.markers.length === 0) {
    return { lat: 32.8801, lng: -117.234 }
  }
  const latSum = props.markers.reduce((sum, marker) => sum + marker.position.lat, 0)
  const lngSum = props.markers.reduce((sum, marker) => sum + marker.position.lng, 0)
  return { lat: latSum / props.markers.length, lng: lngSum / props.markers.length }
})

</script>
<template>
  <PageTitle mainTitle="Conference Location and Directions" />

  <MapInfo
    :apiKey="props.apiKey"
    :mapID="props.mapID"
    :center="center"
    :zoom="props.zoom"
    :markers="props.markers"
  >
      <p class="lead">
        The conference will be held at the University of California, San Diego (UCSD) campus in La Jolla, CA. The main conference venue is Atkinson Hall, located in the heart of the campus.
      </p>
      <p class="lead">
        UCSD is easily accessible from San Diego International Airport (SAN), which is approximately a 25-minute drive from campus. There are also several public transportation options available, including buses and shuttles.
      </p>
  </MapInfo>

  </template>
