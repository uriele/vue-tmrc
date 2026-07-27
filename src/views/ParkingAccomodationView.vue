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

const linkhotel= (link: string) => {
  return 'https://maps.app.goo.gl/' + encodeURIComponent(link)
}

</script>
<template>
  <PageTitle mainTitle="Parking and Accommodations" />

  <MapInfo
    :apiKey="props.apiKey"
    :mapID="props.mapID"
    :center="center"
    :zoom="props.zoom"
    :markers="props.markers"
  >
      <p class="lead">
        UCSD is easily accessible from San Diego International Airport (SAN), which is approximately a 25-minute drive from campus. There are also several public transportation options available, including buses and shuttles.
      </p>
      <h2> Parking Options </h2>
      <p class="lead">
        For attendees driving to campus, there are several parking lots available near Atkinson Hall. We recommend using the <a href="https://maps.app.goo.gl/gBuCqJ1RKsZ3cXKy8" target="_blank" rel="noopener noreferrer">Gilman Parking Structure</a>  near the La Jolla Village Drive entrance
         or the <a href="https://maps.app.goo.gl/etePwrBx7kYAGxr87" target="_blank" rel="noopener noreferrer">Hopkins Parking Structure near North Torrey Pines Road</a>. Parking fees apply, and it is advisable to arrive early to secure a spot.
      </p>
      <p class="lead">
        For more information on directions and parking, please visit the
        <a href="https://maps.ucsd.edu/" target="_blank" rel="noopener noreferrer">UCSD Maps & Directions</a> page.
      </p>

      <h2> Accomodations </h2>
      <p class="lead">
        Even if there is no official conference hotel, there are several hotels
        and accommodations available in the La Jolla area, which is a short drive from the UCSD campus.
        We recommend booking your accommodations early to ensure availability.
        We suggest as possible accomodation near the conference venue the following hotels:
      </p>
      <ul class="lead" v-show="markers?.some(marker => marker.type === 'hotel')">
        <li v-for="hotel in markers?.filter(marker => marker.type === 'hotel')" :key="hotel.id">
          <a v-if="hotel.link" :href="linkhotel(hotel.link)" target="_blank" rel="noopener noreferrer">{{ hotel.name }}</a>
          <span v-else>{{ hotel.name }}</span>
        </li>
      </ul>
  </MapInfo>

  </template>
