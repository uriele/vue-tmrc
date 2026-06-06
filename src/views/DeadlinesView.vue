<script setup lang="ts">
import {Deadline} from "@/stores/Deadline";
import SortedDeadlines from "@/components/SortedDeadlines.vue";
const props= withDefaults(defineProps<{
  deadlines: Deadline[],
  order?: 'ascendent' | 'descendent',
  showStatus?: boolean
}>(),
  {
    order: 'ascendent',
    showStatus: true
  }
)
</script>

<template>
  <PageTitle mainTitle="Important Dates" />
  <section class="main p-4">
    <SortedDeadlines :deadlines="props.deadlines" :order="props.order" :showStatus="props.showStatus" />
  </section>
</template>
