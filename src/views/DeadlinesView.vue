<script setup lang="ts">
import {Deadline} from "@/stores/Deadline";
import SortedDeadlines from "@/components/SortedDeadlines.vue";
defineProps<{
  deadlines: Deadline[],
  order?: 'ascendent' | 'descendent',
  showStatus?: boolean
}>()
</script>

<template>
  <PageTitle mainTitle="Important Dates" />
  <section class="main p-4">
    <SortedDeadlines :deadlines="deadlines" :order="order" :showStatus="showStatus" />
  </section>
</template>
