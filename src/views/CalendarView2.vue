<script setup lang="ts">
import {ScheduleXCalendar} from "@schedule-x/vue";
import {
  createCalendar,
  createViewDay,
  createViewWeek,
} from '@schedule-x/calendar';
import type { CalendarApp } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/index.css';
import 'temporal-polyfill/global';
const viewDay =createViewDay();
const viewWeek=createViewWeek();
const MyCalendar: CalendarApp = createCalendar({
  selectedDate: Temporal.PlainDate.from("2026-08-03"),
  minDate: Temporal.PlainDate.from('2026-08-03'),
  maxDate: Temporal.PlainDate.from('2026-08-09'),
  views: [
    viewWeek,
    viewDay
  ],
  datePicker:{
    min: Temporal.PlainDate.from('2026-08-03'),
    max: Temporal.PlainDate.from('2026-08-09'),
    disabled:true
  },
  timezone: "America/Los_Angeles",
     // Set the calendar to start on Monday
  dayBoundaries: {
      start: '06:00',
      end: '18:00',
  },
  events: [
    {
      id: 1,
      title: "Event 1",
      start: Temporal.ZonedDateTime.from("2026-08-03T10:00:00-07:00[America/Los_Angeles]"),
      end: Temporal.ZonedDateTime.from("2026-08-03T11:30:00-07:00[America/Los_Angeles]"),
      color: "red",
      description: "This is a description for Event 1"
    },
    {
      id: 2,
      title: "Event 2",
      start: Temporal.ZonedDateTime.from("2026-08-03T10:30:00-07:00[America/Los_Angeles]"),
      end: Temporal.ZonedDateTime.from("2026-08-03T12:30:00-07:00[America/Los_Angeles]"),
      color: "blue",
      description: "This is a description for Event 2"
    },
  ],
});
</script>

<template>
  <PageTitle mainTitle="Calendar2" />
  <section class="main p-4">
      <h1 class="reveal" style="--delay: 0.1s">Conference Schedule</h1>
      <ScheduleXCalendar :calendar-app="MyCalendar" />
  </section>
</template>
<style scoped>
.sx__calendar-header .sx__today-button {
    /* border: var(--sx-border); */
    display: none;
}
</style>
