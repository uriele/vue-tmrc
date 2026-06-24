<script setup lang="ts">

import InvitedSpeakerItem from '@/components/InvitedSpeakerItem.vue';
import { computed } from 'vue'
import { Temporal } from '@js-temporal/polyfill'
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
import { useThemeMode } from '@/composables/useThemeMode';

interface GroupTopic {
  [groupId: string]: { name: string; chair?: string, affiliation?: string }
}

interface Props{
  speakers: InvitedSpeaker[]
  groupTopic: GroupTopic
  isPoster?: boolean
}

interface TimeFrame {
  earliestStartTime: string
  latestStartTime: string
}

const props= defineProps<Props>()
const dates = computed(() => {
  const uniqueDates = new Set<string>();
  props.speakers.forEach(speaker => {
    const dateStr = Temporal.ZonedDateTime.from(speaker.date).toPlainDate().toString();
    uniqueDates.add(dateStr);
  });
  return Array.from(uniqueDates);
})

const dateSections = computed(() => dates.value.map(date => {
  const speakersForDate = props.speakers.filter(
    speaker => Temporal.ZonedDateTime.from(speaker.date).toPlainDate().toString() === date
  )
  const groupIds = Array.from(new Set(speakersForDate.map(speaker => speaker.groupId)))

  return {
    date,
    timeFrame: timeFrame(speakersForDate),
    groups: groupIds.map(groupId => ({
      groupId,
      topic: props.groupTopic[groupId],
      speakers: speakersForDate.filter(speaker => speaker.groupId === groupId),
    })),
  }
}))

const {isLight} = useThemeMode()

function formatStartTime(date: Temporal.ZonedDateTime): string {
  return `${date.hour.toString().padStart(2, '0')}:${date.minute.toString().padStart(2, '0')}`
}

function timeFrame(speakersForDate: InvitedSpeaker[]): TimeFrame {
  const startTimes = speakersForDate
    .map(speaker => Temporal.ZonedDateTime.from(speaker.date))
    .sort(Temporal.ZonedDateTime.compare)

  const earliestStartTime = startTimes[0]
  const latestStartTime = startTimes[startTimes.length - 1]

  return {
    earliestStartTime: earliestStartTime ? formatStartTime(earliestStartTime) : '',
    latestStartTime: latestStartTime ? formatStartTime(latestStartTime) : '',
  }
}

function computeDay(dateStr: string): number {
  const conferenceStartDate = Temporal.PlainDate.from('2026-08-03')
  const currentDate = Temporal.PlainDate.from(dateStr)
  return currentDate.since(conferenceStartDate).total('days') + 1
}

</script>
<template>
  <section class="main p-4">
    <div v-for="dateSection in dateSections" :key="dateSection.date"
    class="border-bottom-1 border-secondary mb-4"
    >
      <div
      :class="{' card-light text-secondary':isLight,' bg-primary text-secondary':!isLight}" >
        <h4 class="ms-3 mb-0 text-center capitalize" v-if="props.isPoster"
        >{{ Temporal.PlainDate.from(dateSection.date)
        .toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }} (Day {{computeDay(dateSection.date)}}) {{dateSection.timeFrame.earliestStartTime}}-{{dateSection.timeFrame.latestStartTime}}</h4>

        <h4 class="ms-3 mb-0 text-center capitalize" v-else
        >{{ Temporal.PlainDate.from(dateSection.date)
        .toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }} (Day {{computeDay(dateSection.date)}})</h4>
      </div>
      <div v-for="group in dateSection.groups" :key="`${dateSection.date}-${group.groupId}`"      >
      <div :class="{'text-secondary card-light':isLight,' bg-primary text-secondary':!isLight}" >
        <h5 class="text-center mb-0 pt-1"
        >{{ group.topic?.name }}</h5>
        <h6 class="text-center pb-1" v-if="group.topic?.chair"
        >Session Chair: {{ group.topic?.chair }} ({{ group.topic?.affiliation }})</h6>
      </div>
        <table class="table p-2 table-striped table-hover mb-0">
          <thead>
            <tr v-if="props.isPoster">
              <th scope="col">Poster Id</th>
              <th scope="col">Title</th>
              <th scope="col">Speaker Name</th>
              <th scope="col">Affiliation</th>
            </tr>
            <tr v-else>
              <th scope="col">Paper Id</th>
              <th scope="col">Start</th>
              <th scope="col">Speaker Name</th>
              <th scope="col">Affiliation</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            <InvitedSpeakerItem
            v-for="speaker in group.speakers"
            :key="speaker.id"
            :speaker="speaker"
            :isPoster="props.isPoster"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
