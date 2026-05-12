<script setup lang="ts">
import {computed} from "vue";
const props = defineProps({
  calLink: {
    type: String,
    required: true,
  },
  ctz: {
    type: String,
    required: false,
    default: "America/Los_Angeles",
  },
  startDate: {
    type: Date,
    required: false,
    default: () => new Date("2026-08-03"),
  },
  endDate: {
    type: Date,
    required: false,
    default: () => new Date("2026-08-09"),
  }
});

const iframeSrc = computed(() => {
    const dates = `${props.startDate.toISOString().replace(/[-:]/g, "")
              .split(".")[0]}/${props.endDate.toISOString().replace(/[-:]/g, "")
              .split(".")[0]}`;
    const params = new URLSearchParams({
      src: props.calLink,
      wkst: "1",
      mode: "WEEK",
      showTabs: "0",
      showCalendars: "0",
      showNav: "0",
      ctz: props.ctz,
      dates: dates,

    });
    return `https://calendar.google.com/calendar/embed?${params.toString()}`;
});

</script>

<template>
  <iframe :src="iframeSrc"
  class="calendar-iframe " ></iframe>

</template>

<style scoped>
.calendar-iframe {
  width: 100%;
  aspect-ratio: 8/10;
}
</style>
