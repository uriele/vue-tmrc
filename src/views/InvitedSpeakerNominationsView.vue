<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { DownloadLink } from '@/stores/DownloadLinks'
import DownloadButton from '@/components/DownloadButton.vue'
defineProps({
  formLink: {
    type: String,
    required: true,
  },
  chairsEmail: {
    type: String,
    required: true,
  },
  downloadLinks: {
    type: Array as () => DownloadLink[],
    required: false,
  },
})
</script>

<template>
  <PageTitle mainTitle="Invited Speaker Nominations" />
  <section class="main p-4">
    <p class="lead reveal" style="--delay: 0.2s">
      To nominate an invited speaker, please complete our
      <a :href="`${formLink}`" target="_blank" rel="noopener noreferrer">online nomination form</a>
      (preferred) or
      <a :href="`mailto:${chairsEmail}`">email the Program Chairs directly</a>. For Topics of
      Interest, please visit <RouterLink to="/">Home</RouterLink>.
    </p>
    <h3 class="reveal text-decoration-underline" style="--delay: 0.4s">The deadline for nominations has been extended to April 10th, 2026.</h3>

    <p> For more information please download the extended call for nominations below. </p>
    <div class="d-flex justify-content-center align-items-center">

      <DownloadButton v-for="download in downloadLinks" :key="download.filename" :downloads="download" />
    </div>
  </section>
</template>
