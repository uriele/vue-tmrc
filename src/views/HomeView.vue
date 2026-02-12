<script setup lang="ts">
//import { RouterLink } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import UCSDCarousel from '@/components/UCSDCarousel.vue'

defineProps({
  formLink: {
    type: String,
    required: true,
  },
  chairsEmail: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <PageTitle
    mainTitle="Welcome to TMRC 2026"
    subTitle="The 37th Magnetic Recording Conference"
    subSubtitle="August 3rd – August 5th, 2026 | University of California, San Diego"
  />

  <section class="main p-4">
    <div class="main-text">
      <p class="eyebrow reveal" style="--delay: 0s">TMRC 2026</p>
      <h1 class="reveal" style="--delay: 0.1s">San Diego, California.</h1>

      <UCSDCarousel />
      <p class="lead reveal" style="--delay: 0.2s">
        The 37th Magnetic Recording Conference will be held at University of California, San Diego
        on August 3rd – August 5th, 2026. The focus of TMRC 2026 is Solid State Magnetic Memory,
        Storage Architectures for Artificial Intelligence and Recording Technologies for >3
        Tbits/in2.
      </p>
      <p class="lead reveal" style="--delay: 0.2s">
        Approximately 36 invited papers of the highest quality will be presented orally at the
        conference and will later be published in the IEEE Transactions on Magnetics. Poster
        sessions will also be held following the oral sessions and will feature posters from the
        invited speakers and accepted contributed posters. Presenters of invited & contributed
        papers are encouraged for publication.
      </p>
    </div>

    <div class="card border-dark bg-primary text-secondary mb-3" style="--delay: 0.35s">
      <h3 class="card-header">Topic of Interest Include</h3>
      <div class="card-body">
        <h5 class="card-title">Solid State Memory – Devices and Applications</h5>
        <ul class="card-text">
          <li>
            Spin Transfer Torque-Magnetic Random Access Memory (MTJ cell, MRAM chip manufacturing
            and roadmap).
          </li>
          <li>
            MRAM – New Physics & Materials (MRAM architecture, VC-MRAM, SOT-MRAM, TI & 2D
            materials).
          </li>
        </ul>
        <h5 class="card-title">Storage Architectures and Applications for AI / ML</h5>
        <ul class="card-text">
          <li>In-Memory and Near Memory Compute.</li>
          <li>Advanced Memory Bus Architectures.</li>
          <li>Neuromorphic Computing.</li>
        </ul>
        <h5 class="card-title">Advanced Generation Recording Technologies</h5>
        <ul class="card-text">
          <li>
            Energy Assisted Magnetic Recording (HAMR, MAMR, System, Head/Media, HDI and Materials).
          </li>
          <li>
            Energy Assisted Magnetic Recording (HAMR, MAMR, System, Head/Media, HDI and Materials).
          </li>
          <li>
            Advanced Magnetic Recording for > 3 Tbits/in2 (Readers, Writers, Servo, Tribology, HDI,
            Signal Processing, Recording Physics, Device Processing, Materials).
          </li>
        </ul>
      </div>
    </div>

    <div class="main-text">
      <p class="lead reveal" style="--delay: 0.2s">
        To nominate an invited speaker, please complete our
        <a :href="formLink" target="_blank" rel="noopener noreferrer"
          ><u>online nomination form</u></a
        >
        (preferred) or
        <a :href="`mailto:${chairsEmail}`">email the Program Chairs directly</a>.
      </p>
    </div>
  </section>
</template>
