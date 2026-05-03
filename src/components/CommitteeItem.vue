<script setup lang="ts">
import { type Person } from '@/stores/Person'
defineProps({
  person: {
    type: Object as () => Person,
    required: true,
  },
})
</script>

<template>
  <p class="lead reveal" style="--delay: 0.2s">
    {{ person.name }},{{ person.company }} –
    <a :href="`mailto:${person.email}`">{{ person.email }}</a>
  </p>
</template>
