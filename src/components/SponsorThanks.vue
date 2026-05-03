<script setup lang="ts">
import type { Sponsor } from '@/stores/Sponsor'
defineProps({
  corporateSponsors: {
    type: Array as () => Sponsor[],
    required: true,
  },
})
</script>
<template>
    <h2 class="mb-2 m-5 ml-4 text-secondary fadeIn">Our Sincere Thanks to Our Corporate Sponsors!</h2>
    <div
    class="d-flex flex-wrap justify-content-center align-items-center
    gap-2 mt-3 mb-5 reveal"
    style="--delay:2.0s">
      <img v-for="(sponsor, index) in corporateSponsors" :key="sponsor.name" :src="sponsor.logo?.toString()" :alt="`${sponsor.name} logo`" class="sponsor-logo
      img-thumbnail fadeIn
       bg-white" :style="`--i: ${index}`" />
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
