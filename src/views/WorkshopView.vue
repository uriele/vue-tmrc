<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { MapMarker } from '@/stores/MapMarker';
import { computed } from 'vue';
const props = defineProps<{
  marker: MapMarker,
  registrationLink: string,
}>()

const link= computed(() => {
  const markerLink = props.marker.link
  return `https://maps.app.goo.gl/${markerLink}`
})

</script>

<template>
  <PageTitle mainTitle="Standards in Magentics Workshop"
   subTitle="An IEEE Standards Association & IEEE Magnetics Society Summit"
   subSubtitle="Chairs: Sidhant Tiwari, HRL and Dan Gopman, NIST"
  />
  <section class="main p-4">


  <h3 class="reveal" style="--delay: 0.4s">
      <a :href="props.registrationLink"><strong>Register for the workshop here</strong></a>
  </h3>
  <p class="lead fw-bolder">
       This session is offered free of charge to the magnetics community. Pre-registration is mandatory for all attendees due to limited seating capacity.   </p>
  <p class="lead">
    Join us for talks, networking, and light food and beverages in this workshop dedicated to establishing a shared technical vocabulary and rigorous benchmark for the next
    generation of storage and non-volatile memory technologies. The workshop will be held on August 3rd from 3:30pm to 6:30pm at the
    <a :href="link" target="_blank" rel="noopener noreferrer">Center for Memory and Recording Research (CMRR)</a>  on the UCSD campus, followed by the TMRC opening reception.
  </p>


    <div class="card border-dark bg-primary text-secondary mb-3" style="--delay: 0.35s">
      <h3 class="card-header">Who should join us?</h3>
      <div class="card-body">
        <h5 class="card-title">Magnetics Enthusiasts:</h5>
        <p class="card-text p-2">
          Enthusiasts: Protect emerging technologies from skepticism and ensure "apples-to-apples" comparisons that drive market adoption. Our broad
goal is to move beyond laboratory-specific metrics to industry-wide consensus.
        </p>
        <h5 class="card-title">Engineers:</h5>
        <p class="card-text p-2">
          Gain competitive advantage by shifting from a standards-taker to a
standards-shaper. Join the discussion in verification protocols that will define
future media sanitization and MRAM immunity requirements.
        </p>
        <h5 class="card-title">Academics:</h5>
        <p class="card-text p-2">
          Cultivate a nuanced perspective by joining expert-led discussions in
which we delve into reliability parameters for MRAM magnetic immunity;
advancing verification standards for secure data destruction in advanced media;
and standardizing MTJ sensor performance.
        </p>
        <h5 class="card-title">TMRC 2026 attendees:</h5>
        <p class="card-text p-2">
          Start your TMRC experience with a dive into ongoing
measurement and standardization activities that will accelerate production and
use of TMRC-aligned magnetic recording and memory technologies.
        </p>
      </div>
    </div>

  </section>
</template>
