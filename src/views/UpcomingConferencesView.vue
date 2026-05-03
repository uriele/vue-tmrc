<script setup lang="ts">
import type { Conference } from '@/stores/Conferences'
defineProps({
  conferences: {
    type: Array as () => Conference[],
    required: false,
  },
})
</script>

<template>
  <PageTitle mainTitle="Upcoming Conferences" />
  <section class="main p-4">
    <div class="main-text lead">

  <p>
    The 71st Annual Conference on Magnetism and Magnetic Materials (MMM 2026 Conference) will be held at the Hilton Hawaiian Village Waikiki Beach Resort in Honolulu, Hawaii, USA, on November 2-6, 2026. The technical program will include invited and contributed papers in oral and poster sessions, invited symposia, a tutorial, and several special sessions. This Conference provides an outstanding opportunity for worldwide participants to meet, share their research, and to discuss and learn about the most recent developments in all areas of magnetism research.
    The abstract submission deadline for MMM 2026 is April 29, 2026.
  </p>

<p>
  Abstracts can be submitted here:
</p>
<a href="https://magnetism.org/2026/abstract-submissions" target="_blank">https://magnetism.org/2026/abstract-submissions</a>

<p>
  Authors may submit their abstract either to one of the technical categories:
</p>
<a href="https://magnetism.org/2026/technical-categories" target="_blank">https://magnetism.org/2026/technical-categories</a>

<p>
  or to one of the 16 symposia:
</p>
<a href="https://magnetism.org/2026/symposia-sessions" target="_blank">https://magnetism.org/2026/symposia-sessions</a>

<p>
  Please feel free to share this information with your students, postdocs, colleagues, and collaborators who may be interested in participating in MMM 2026. We look forward to seeing many exciting contributions in Honolulu.
</p>

    </div>
  </section>
</template>
