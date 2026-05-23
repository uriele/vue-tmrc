<script setup lang="ts">
import { computed } from 'vue'
import {type Sponsor} from '@/stores/Sponsor'
const props = defineProps({
  sponsor: {
    type: Object as () => Sponsor,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: 'medium',
  },
})

const link = computed(() => props.sponsor.website?.href || '#');
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="d-block"
  >
    <img
      v-if="props.sponsor.logo"
      :src="props.sponsor.logo.toString()"
      :alt="props.sponsor.name + ' Logo'"
      class="sponsor-logo img-fluid img-thumbnail bg-white"
    />
    <div v-else class="lead  ms-2 ">{{ props.sponsor.name }}</div>
  </a>
</template>

<style scoped>
.sponsor-logo {
    max-height: 120px; /* Adjust height to maintain aspect ratio */
}

</style>
