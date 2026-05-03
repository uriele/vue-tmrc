<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { Sponsor ,SponsorType} from '@/stores/Sponsor'
import SponsorItem from '@/components/SponsorItem.vue'
defineProps({
  localHosts: {
    type: Array as () => Sponsor[],
    required: true,
  },
  sponsors: {
    type: Array as () => Sponsor[],
    required: true,
  },
  corporateSponsors: {
    type: Array as () => Sponsor[],
    required: true,
  },
})

const sponsorTypes: SponsorType[] = ['platinum', 'gold', 'silver', 'bronze']
</script>

<template>
  <PageTitle mainTitle="Sponsors" />
  <section class="main p-4">
    <div class="main-text">
      <h2 class="mb-3 text-capitalize">Local Hosts</h2>
      <div class="d-flex flex-wrap gap-4 mb-5">
        <ul>
        <li v-for="sponsor in localHosts" :key="sponsor.name">
          <SponsorItem
            :sponsor="sponsor"
          />
        </li>
        </ul>
      </div>
      <h2 class="mb-3 text-capitalize">Sponsor</h2>
      <div class="d-flex flex-wrap gap-4 mb-5">
        <SponsorItem
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          :sponsor="sponsor"
        />
      </div>
      <h2 class="mb-3 text-capitalize">Corporate Sponsors</h2>
      <div v-for="sponsorType in sponsorTypes" :key="sponsorType" class="mb-4">
        <h3 v-if="corporateSponsors.some(s => s.type === sponsorType)" class="mb-3 ps-2 text-capitalize">{{ sponsorType }}</h3>
        <div class="d-flex flex-wrap gap-4 mb-5">
          <SponsorItem
            v-for="sponsor in corporateSponsors.filter(s => s.type === sponsorType)"
            :key="sponsor.name"
            :sponsor="sponsor"
          />
        </div>
      </div>
    </div>
  </section>
</template>
