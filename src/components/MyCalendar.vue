<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import type { CalendarOptions } from '@fullcalendar/core'
import {CALENDARDOWNLOADLINK} from '@/router/routerConstants'
const props = defineProps({
  calendarId: {
    type: String,
    required: false,
    default: CALENDARDOWNLOADLINK,
  },
})

const calendarOptions: CalendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, googleCalendarPlugin],
  initialView: 'timeGridWeek',
  initialDate: '2026-08-02',
  timeZone: 'America/Los_Angeles',
  themeSystem: 'bootstrap5',

  googleCalendarApiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY,

  events: {
    googleCalendarId: props.calendarId,
  },


  headerToolbar: {
    left: 'prev,next',
    center: 'title',
    right: 'timeGridDay,timeGridWeek',
  },

  allDaySlot: false,
  slotMinTime: '08:00:00',
  slotMaxTime: '23:00:00',
  validRange: {
    start: '2026-08-02',
    end: '2026-08-06',
  },
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  },
}

</script>

<template>
    <FullCalendar :options="calendarOptions" />
</template>

<style scoped>
  :deep(thead tr th) {
    background-color: var(--bs-primary) !important;
  }
  :deep(a) {
    color: var(--bs-secondary) !important;
  }
</style>
