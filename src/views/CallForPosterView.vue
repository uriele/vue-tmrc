<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import { RouterLink } from 'vue-router'
defineProps({
  formLink: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <PageTitle mainTitle="Call for Posters" />
  <section class="main p-4">
    <p class="lead">
      We are now accepting poster submissions for TMRC 2026. To submit a poster presentation,
      please prepare a 2-page digest using the digest template available on <router-link :to="{ name: 'digest-submission' }">the Digest Submission page</router-link>.

      Next, submit your digest via the <a :href="formLink" target="_blank" rel="noopener noreferrer">poster submission form</a>.
      If you are unable to submit your digest via the web form, please contact the TMRC Poster Session Chair,

      <a href="mailto:simon@riec.tohoku.ac.jp">Simon Greaves</a>. Please submit your digest by
      <strong>May 8th, 2026</strong>.
    </p>

    <p class="lead">
      Students whose poster digests are accepted are eligible to apply
      for the <router-link :to="{ name: 'neil-smith-award' }">Neil Smith Award</router-link>, <router-link :to="{ name: 'travel-grants' }">Travel Grants</router-link> up to $1000, and Best Poster awards.
      Deadlines for the Neil Smith Award and Travel Grant application can be found under their respective tabs. All students with accepted poster digests are automatically eligible for the best poster award
    </p>
  </section>
</template>
