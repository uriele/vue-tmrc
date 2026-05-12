<script setup lang="ts">
import type { Sponsor } from '@/stores/Sponsor'
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
const normalOrLocalSponsors = props.normalSponsors || props.localSponsors
const hasNormalOrLocalSponsors = normalOrLocalSponsors && normalOrLocalSponsors.length > 0
</script>
<template>
    <div v-if="hasNormalOrLocalSponsors" class="mb-5">
      <h1 class="mb-5 mt-5 ml-4 fadeIn text-center" style="--delay:0.5s"
      :class="{'text-secondary': isLight}">Special Thanks</h1>
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
    <h1 class="mb-2 m-5 ml-4 fadeIn text-center" style="--delay:0.5s"
    :class="{'text-secondary': isLight}"
    >Our Sincere Thanks to Our Corporate Sponsors!</h1>
    <div
    class="d-flex flex-wrap justify-content-center align-items-center
    gap-2 mt-3 mb-5 reveal"
    style="--delay:2.0s">
      <SponsorItem v-for="sponsor in corporateSponsors" :key="sponsor.name" :sponsor="sponsor" />
    </div>
</template>

<style scoped>
.sponsor-logo {
  max-height:100px;
  max-width: 150px;
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
