<script setup lang="ts">
import type { Sponsor, SponsorType } from '@/stores/Sponsor'
import SponsorItem from '@/components/SponsorItem.vue'
import { useThemeMode } from '@/composables/useThemeMode';
const props=defineProps({
  corporateSponsors: {
    type: Array as () => Sponsor[],
    required: true,
  },
  normalSponsors: {
    type: Array as () => Sponsor[],
    required: false,
  },
  localSponsors: {
    type: Array as () => Sponsor[],
    required: false,
  },
})
const { isLight } = useThemeMode()
const alwaysFalse = false
const normalOrLocalSponsors = props.normalSponsors || props.localSponsors
const hasNormalOrLocalSponsors = normalOrLocalSponsors && normalOrLocalSponsors.length > 0


const sponsorTypes: SponsorType[] = ['platinum', 'gold', 'silver', 'bronze']
</script>
<template>
  <div :class="{ 'card border-dark border-round card-light text-secondary mb-3': alwaysFalse }" style="--delay: 0.35s">
    <div v-if="hasNormalOrLocalSponsors" class="mb-5">
      <h1 class="mb-5 mt-5 fadeIn text-center" style="--delay:0.5s"
      :class="{'text-secondary card-light': isLight}">Special Thanks</h1>
      <div
      class="d-flex flex-wrap justify-content-center align-items-center
      gap-2 mt-3 mb-5 reveal"
      style="--delay:2.0s" >
      <SponsorItem v-for="sponsor in normalSponsors" :key="sponsor.name" :sponsor="sponsor" />
      </div>
      <div
      class="d-flex flex-wrap justify-content-center align-items-center
      gap-2 mt-3 reveal"
      style="--delay:2.0s" >
      <SponsorItem v-for="sponsor in localSponsors" :key="sponsor.name" :sponsor="sponsor" />
      </div>
    </div>
    <h1 class="mb-2 mt-5 fadeIn text-center" style="--delay:0.5s"
    :class="{'text-secondary card-light': isLight}"
    >Our Sincere Thanks to Our Corporate Sponsors!</h1>

      <div v-for="sponsorType in sponsorTypes" :key="sponsorType" class="mb-4 fadeIn"  style="--delay: 0.35s">
          <h3 v-if="corporateSponsors.some(s => s.type === sponsorType)" class=" ps-2 text-capitalize">{{ sponsorType }}</h3>
          <div class="d-flex flex-wrap justify-content-center gap-4">
            <SponsorItem
              v-for="sponsor in corporateSponsors.filter(s => s.type === sponsorType)"
              :key="sponsor.name"
              :sponsor="sponsor"
            />
          </div>
      </div>
  </div>
</template>

<style scoped>
.sponsor-logo {
  max-height:120px;
  object-fit: contain;
}
</style>

<style scoped>

.fadeIn {
    opacity: 0;
    animation: fadeIn 3s ease-in forwards;
    animation-delay: calc(var(--i) * 0.1s);
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>
