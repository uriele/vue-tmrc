<script setup lang="ts">

import InvitedSpeakerItem from '@/components/InvitedSpeakerItem.vue';

import PageTitle from '@/components/PageTitle.vue';
import { computed } from 'vue'
import { Temporal } from '@js-temporal/polyfill'
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
import { useThemeMode } from '@/composables/useThemeMode';

interface GroupTopic {
  [groupId: string]: { name: string; chair: string, affiliation: string }
}

interface Props{
  speakers?: InvitedSpeaker[]
  groupTopic?: GroupTopic
}

const props= withDefaults(defineProps<Props>()
,{
  speakers: () => [
    {
      groupId: 'A',
      paperId: 123,
      name: 'Dr. Jane Doe',
      affiliation: 'University of Example',
      title: 'The Future of AI Research',
      id: 1,
      len: 60,
      date: Temporal.ZonedDateTime.from('2026-08-15T10:00:00Z[UTC]'),
    },
  ],
  groupTopic: () => ({
      'A': { name: 'Advanced Materials and Media',
      chair: 'Andrew Kent',
      affiliation: 'New York University'
      },
      'B': { name: 'HAMR', chair: 'Randy Victora', affiliation: 'University of Minnesota' },
      'C': { name: 'MRAM (I)', chair: 'Jian-Ping Wang', affiliation: 'University of Minnesota' },
      'D': { name: 'MRAM (II)', chair: 'Fred Mancoff', affiliation: 'Everspin Technologies' },
      'E': { name: 'AI and Neuromorphing Computing', chair: 'Shan Wang', affiliation: 'Stanford University' },
      'F': { name: 'Channels and Novel Recording Architectures', chair: 'Akira Kikitsu', affiliation: 'Toshiba Corporation' },
    })
})

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
    groups: groupIds.map(groupId => ({
      groupId,
      topic: props.groupTopic[groupId],
      speakers: speakersForDate.filter(speaker => speaker.groupId === groupId),
    })),
  }
}))


const {isLight} = useThemeMode()

function computeDay(dateStr: string): number {
  const conferenceStartDate = Temporal.PlainDate.from('2026-08-03')
  const currentDate = Temporal.PlainDate.from(dateStr)
  return currentDate.since(conferenceStartDate).total('days') + 1
}

</script>
<template>
  <PageTitle mainTitle="Invited Speakers" />

  <section class="main p-4">
    <div v-for="dateSection in dateSections" :key="dateSection.date"
    class="border-bottom-1 border-secondary mb-4"
    >
      <div
      :class="{' card-light text-secondary':isLight,' bg-primary text-secondary':!isLight}" >
        <h4 class="ms-3 mb-0 text-center capitalize"
        >{{ Temporal.PlainDate.from(dateSection.date)
        .toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }} (Day {{computeDay(dateSection.date)}})</h4>
      </div>
      <div v-for="group in dateSection.groups" :key="`${dateSection.date}-${group.groupId}`"      >
      <div :class="{'text-secondary card-light':isLight,' bg-primary text-secondary':!isLight}" >
        <h5 class="text-center mb-0 pt-1"
        >{{ group.topic?.name }}</h5>
        <h6 class="text-center pb-1"
        >Session Chair: {{ group.topic?.chair }} ({{ group.topic?.affiliation }})</h6>
      </div>
        <table class="table p-2 table-striped table-hover mb-0">
          <thead>
            <tr>
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
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>

</template>
