<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { MapMarker } from '@/stores/MapMarker';
const props = defineProps<{
  marker: MapMarker
  imageSrc: string
}>()

const link= `https://maps.app.goo.gl/${props.marker.link}`
</script>

<template>
  <PageTitle mainTitle="Keynote Speech and Banquet" />
  <section class="main p-4">

    <img :src="props.imageSrc" alt="Keynote Banquet" class="img-fluid mb-4 d-block mx-auto" />
    <p class="lead">
      The TMRC 2026 Conference Banquet will be held at the <a :href="link" target="_blank" rel="noopener noreferrer">Great Hall at UCSD</a>
      on August 4 from 7pm to 10pm PT. The award-winning International House Great Hall employs beautiful architecture of Safdie Rabines which features stunning views.
</p>
      <p class="lead">
You will be surrounded by impressive, award-winning architecture and panoramic ocean views as you enjoy the keynote speech, the awards presentation, and a relaxing evening with great food.
</p>
<p class="lead">
The Great Hall is located directly off North Torrey Pines Road, with ample and easy "right next door" parking.
</p>
  </section>
</template>
