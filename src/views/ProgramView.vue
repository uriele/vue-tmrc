<script setup lang="ts">
import type { MapMarker } from '@/stores/MapMarker'
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map'
import { onMounted } from 'vue'
import { ref, computed } from 'vue'
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
    required: true,
  },
  zoom: {
    type: Number,
    required: false,
    default: 15,
  },
  markers: {
    type: Array<MapMarker>,
    required: false,
  },
})

// Center is the middle of the markers if they exist, otherwise default to UCSD
const centerUCSD = computed(() => {
  if (!props.markers || props.markers.length === 0) {
    return { lat: 32.8801, lng: -117.234 }
  }
  const latSum = props.markers.reduce((sum, marker) => sum + marker.position.lat, 0)
  const lngSum = props.markers.reduce((sum, marker) => sum + marker.position.lng, 0)
  return { lat: latSum / props.markers.length, lng: lngSum / props.markers.length }
})

const activeId = ref<string | null>(null)

function toggleMarker(id: string) {
  activeId.value = activeId.value === id ? null : id
}

const activeMarker = computed(() => props.markers?.find((m) => m.id === activeId.value) ?? null)

const googleMapsLink = computed(() => {
  if (!activeMarker.value) return undefined
  const link = activeMarker.value.link
  return `https://maps.app.goo.gl/${link ? link : `${activeMarker.value.position.lat},${activeMarker.value.position.lng}`}`
})

onMounted(() => {
  console.log(
    'Google Maps API Key:',
    props.apiKey ? 'Present (length: ' + props.apiKey.length + ')' : 'Missing',
  )
  console.log('Map Center:', props.center)
  console.log('Map Zoom:', props.zoom)
})
</script>

<template>
  <PageTitle mainTitle="Program" />
  <section class="main p-4">
    <div class="main-text" />
    <GoogleMap
      :api-key="apiKey"
      :map-id="mapID"
      :center="centerUCSD"
      :zoom="16"
      style="width: 100%; height: 400px"
    >
      <AdvancedMarker
        v-for="marker in markers"
        :key="marker.id"
        :options="{ position: marker.position, title: marker.name, gmpClickable: true }"
        @click="toggleMarker(marker.id)"
        :pin-options="{ background: '#FBBC04' }"
      >
      </AdvancedMarker>

      <!-- Single InfoWindow -->
      <InfoWindow
        v-if="activeMarker"
        :model-value="true"
        :options="{
          position: activeMarker.position,
          pixelOffset: { width: 0, height: -30 },
        }"
        @update:modelValue="
          (open) => {
            if (!open) activeId = null
          }
        "
        class="bg-primary p-3 rounded"
      >
        <div class="content custom-infowindow">
          <h4>{{ activeMarker.name }}</h4>
          <p>{{ activeMarker.description }}</p>
          <a :href="googleMapsLink" target="_blank" rel="noopener noreferrer" class="maps-link">
            Open in Google Maps →
          </a>
        </div>
      </InfoWindow>
    </GoogleMap>
  </section>
</template>

<style scoped>
.custom-infowindow {
  background: var(--bs-primary);
  color: var(--bs-secondary);
  padding: 16px;
  border-radius: 16px;
  width: 280px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
</style>
