<script setup lang="ts">
import MyCalendar from '@/components/MyCalendar.vue';

defineProps<{
  programEvents: {
    date: string;
    time: string;
    event: string;
    location: {
      name: string;
      link: string;
    };
  }[];
}>()

</script>

<template>
  <PageTitle mainTitle="Program" />
  <section class="main p-4">
    <h3 class="mb-3">Program at a Glance</h3>
    <MyCalendar/>

  </section>
</template>

<style scoped>
.custom-infowindow {
  background: var(--bs-primary);
  color: var(--bs-secondary);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
</style>
