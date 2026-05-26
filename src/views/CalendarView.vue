<script setup lang="ts">
import CalendarConference from '@/components/CalendarConference.vue';
interface Props{
  calLink: string,
  ctz?: string,
  startDate?:  Date,
  endDate?: Date
};

const props = withDefaults(defineProps<Props>(), {
  ctz: "America/Los_Angeles",
  startDate: () => new Date("2026-08-02"),
  endDate: () => new Date("2026-08-07")
});
</script>
<template>
  <PageTitle mainTitle="Calendar" />
  <section class="main p-4">
      <h1 class="reveal" style="--delay: 0.1s">Conference Schedule</h1>
      <CalendarConference :calLink="props.calLink" :ctz="props.ctz" :startDate="props.startDate" :endDate="props.endDate"
      class="w-100"
      />
  </section>

</template>
