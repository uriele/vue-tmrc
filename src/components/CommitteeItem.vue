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
  <div class="card border-dark card-rounded bg-primary text-secondary mb-3 p-2 "
   style="--delay: 0.35s"
   data-toggle="popover"
   data-placement="auto"
   data-trigger="hover"
    data-container="body"
   :title="`email : ${person.email}`"
   >
    <div class="text-capitalize text-center fs-6">{{ person.role }}</div>
    <a :href="`mailto:${person.email}`" blank="_blank" rel="noopener noreferrer"
    class="text-center hover-zoom"
    >
    <div class="fs-3">{{ person.name }}</div>
    <div>{{ person.company }}</div>
    </a>
  </div>
</template>
<style scoped>
 a{
  text-decoration: none;
  color: inherit;
 }
  a:hover{
    text-decoration: underline;
  }

 .card-rounded {
  border-radius: 15px 0px 15px 0px !important;
}
</style>
