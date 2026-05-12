<script setup lang="ts">
//import { RouterLink } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import UCSDCarousel from '@/components/UCSDCarousel.vue'
import SponsorThanks from '../components/SponsorThanks.vue';
import { CORPORATESPONSORS, LOCALHOSTS,SPONSORS } from '@/router/routerConstants';
import { useThemeMode } from '@/composables/useThemeMode';
import { LoopScroll } from "@joyday/vue-loop-scroll";
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
const { isLight } = useThemeMode()
const HomeBg = new URL('../assets/home-bg.jpg', import.meta.url)

const dataSource: { id: number; value: string }[] = [{
  id:1,value:"     Early Registration Opened for TMRC 2026                      "},
{id:2,value:"      Deadline for Invited Speaker Acceptance is: May 15th, 2026                "},
{id:3,value:"      Extended Deadline for Poster Submissions: May 29th, 2026                   "}];
</script>

<template>
  <PageTitle
    mainTitle="Welcome to TMRC 2026"
    subTitle="The 37th Magnetic Recording Conference"
    superTitle="August 3rd – August 5th, 2026 | University of California, San Diego"
    subSubtitle="Sponsored by the IEEE Magnetics Society"
    :bgHome="HomeBg"
  />
  <div class="box"
  :class="{' card-light text-secondary':isLight}"
  >
  <LoopScroll :dataSource="dataSource" direction="left" class="display-5" waitMode="item" loadCount="1">
      <template #default="{ item }">
        <span>{{ item.value }}</span>
      </template>
  </LoopScroll>
  </div>
  <section class="main p-4 row">
      <!--
      <p class="eyebrow reveal" style="--delay: 0s">TMRC 2026</p>
      <h1 class="reveal" style="--delay: 0.1s">San Diego, California.</h1>
      -->
      <UCSDCarousel class="col-12 col-md-6 h-100"/>

    <div class="col-12 col-md-6 h-100">
      <p class="lead reveal" style="--delay: 0.2s">
     The 37th Magnetic Recording Conference will be held at University of California, San Diego on <strong>August 3rd – August 5th, 2026</strong>.
     The focus of TMRC 2026 is Solid State Magnetic Memory, Storage Architectures for Artificial Intelligence and Recording Technologies for > 4 Tbits/in2.
     TMRC 2026 will celebrate seven decades of magnetic recording with an exciting array of 45 invited talks. These talks from members of industry and academia
     will be followed by Bierstube and poster sessions. TMRC 2026 will contain a number of firsts: a collaborative session with the IEEE Standards Committee,
     a pre-conference reception, dinner at the UCSD Gliderport and an opportunity to kayak in the waters of La Jolla.
      </p>
      <p class="lead reveal" style="--delay: 0.2s">
        Be sure to attend the conference to be a part of exciting discussions on developments in Solid State Memories, Magnetic Recording, Alternative Data Storage Architectures and a lot more!
      </p>
    </div>

    <!-- /*
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
        <a :href="`${formLink}`" target="_blank" rel="noopener noreferrer"
          >online nomination form</a
        >
        (preferred) or
        <a :href="`mailto:${chairsEmail}`">email the Program Chairs directly</a>.
      </p>
    </div>

    <div class="main-text">
      <p class="lead reveal" style="--delay: 0.2s">
        To submit a poster presentation, please prepare a 2-page digest using the digest template available on <router-link :to="{ name: 'digest-submission' }">the Digest Submission page</router-link>.
        Next, submit your digest via the web form linked on the <router-link :to="{ name: 'call-for-posters' }">Call for Posters page</router-link> or contact the Poster Session Chair, <a href="mailto:mailto:simon@riec.tohoku.ac.jp">Simon Greaves</a>.
        The deadline for poster submissions is <strong>May 8th, 2026</strong>.
      </p>
    </div>
    */ -->


  </section>
  <section class="main p-4">
  <div :class="{ 'card border-dark border-round card-light text-secondary mb-3': isLight }" style="--delay: 0.35s">
    <SponsorThanks
    :normalSponsors="SPONSORS"
    :localSponsors="LOCALHOSTS"
    :corporateSponsors="CORPORATESPONSORS" />
  </div>
  </section>
</template>

<style scoped>
.box {
  width: 100%;
  height: 4rem;
  :deep(.scroll-loop-item) {
    padding-right: 20rem;
  }
}
</style>
