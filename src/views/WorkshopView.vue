<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { MapMarker } from '@/stores/MapMarker';
import { computed } from 'vue';
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers';
import { useThemeMode } from '@/composables/useThemeMode';
import SponsorItem from '@/components/SponsorItem.vue';
import type { Sponsor } from '@/stores/Sponsor';
const props = defineProps<{
  marker: MapMarker,
  registrationLink: string,
  speakers?: InvitedSpeaker[],
  sponsors?: Sponsor[]
}>()
const {isLight} = useThemeMode()
const link= computed(() => {
  const markerLink = props.marker.link
  return `https://maps.app.goo.gl/${markerLink}`
})

</script>

<template>
  <PageTitle mainTitle="Developing Standards in Magnetics: Standardizing Spintronics and Recording"
   superTitle="Sunday, August 2nd, 2026 | 3:30pm - 6:30pm"
   subTitle="Chairs: Sidhant Tiwari (HRL) and Dan Gopman (NIST)"
  />
  <section class="main p-4 lead">


  <div class="mb-4">
    <div v-if="props.sponsors && props.sponsors.length > 0" class="d-flex flex-row gap-3 mb-4">
      <p><strong>Sponsored by:</strong></p>
      <div class="d-flex flex-row gap-3">
        <SponsorItem v-for="sponsor in props.sponsors" :key="sponsor.name" :sponsor="sponsor" size="medium"/>
      </div>
    </div>

    <p><strong>Location:</strong> <a :href="link" target="_blank" rel="noopener noreferrer">{{ props.marker.name }}</a></p>

    <p><strong>Organizing Committee:</strong> <strong> Hans Nembach</strong> (NIST),
      <strong>Gillian Boyce</strong> (NIST), <strong>Vitaliy Lomakin</strong> (UCSD), <strong>Sidhant Tiwari</strong> (HRL) and <strong>Dan Gopman</strong> (NIST)</p>
  </div>

  <p>
    Emerging magnetic technologies require more than just laboratory breakthroughs to achieve market adoption. To protect these innovations from skepticism and ensure "apples-to-apples" comparisons, a collective effort is necessary to establish rigorous benchmarks and a shared technical vocabulary. This is critical for moving beyond laboratory-specific metrics to reach industry-wide consensus, particularly as we define future media sanitization and MRAM immunity requirements.
  </p>

  <p>
    The aim of this half-day workshop, organized by the IEEE Magnetics Society and IEEE Standards Association, is to dive into ongoing measurement and standardization activities. Invited speakers from across the technical landscape will delve into reliability parameters for MRAM magnetic immunity, advance verification standards for secure data destruction in next-generation media, and discuss the standardization of MTJ sensor performance.
  </p>
  <p>
    Beyond the specific technical metrics, this symposium will provide attendees with a competitive advantage by helping them shift from being "standards-takers" to "standards-shapers." It serves as a prime example of how engineers, academics, and industry enthusiasts can collaborate to accelerate the production and use of TMRC-aligned magnetic recording and memory technologies.
  </p>
  <p>
    This session is offered free of charge to the magnetics community and will be followed by the TMRC opening reception. Pre-registration is mandatory for all attendees due to limited seating capacity.
  </p>

  <h3 class="reveal text-center mb-3" style="--delay: 0.4s">
      <a :href="props.registrationLink"><strong>Register for the workshop here</strong></a>
  </h3>
  </section>

  <div v-if="props.speakers && props.speakers.length > 0"
    class="card border-da text-secondary m-3"
    :class="{'card-light text-secondary':isLight,' bg-primary text-secondary':!isLight}" >
    <h3 class="card-header">Speakers</h3>
      <div class="card-body">
        <ul class="card-text lead gap-2">
          <li v-for="speaker in props.speakers" :key="speaker.id"
          class="mb-2">
            <strong>{{ speaker.name }}</strong> ({{ speaker.affiliation }}):
             <em>{{ speaker.title }}</em>
          </li>
        </ul>
      </div>
  </div>


</template>

<style scoped>
strong {
  font-weight: 600;
}
</style>
