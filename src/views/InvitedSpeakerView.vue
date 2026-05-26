<script setup lang="ts">

import InvitedSpeakerItem from '@/components/InvitedSpeakerItem.vue';

import PageTitle from '@/components/PageTitle.vue';
import { computed } from 'vue'
import { Temporal } from '@js-temporal/polyfill'
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
import { useThemeMode } from '@/composables/useThemeMode';

interface GroupTopic {
  [groupId: string]: string
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
      'A': 'Advanced Materials and Media',
      'B': 'HAMR',
      'C': 'MRAM (I)',
      'D': 'MRAM (II)',
      'E': 'AI and Neuromorphing Computing',
      'F': 'Channels and Novel Recording Architectures',
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


</script>
<template>
  <PageTitle mainTitle="Invited Speakers" />

  <section class="main p-4">
    <div v-for="dateSection in dateSections" :key="dateSection.date">
      <div
      :class="{' card-light text-secondary':isLight,' bg-primary text-secondary':!isLight}" >
        <h4 class="ms-3 mb-0"
        >{{ Temporal.PlainDate.from(dateSection.date).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</h4>
      </div>
      <div v-for="group in dateSection.groups" :key="`${dateSection.date}-${group.groupId}`"      >
      <div :class="{'text-secondary card-light':isLight,' bg-primary text-secondary':!isLight}" >
        <h5 class="ms-3"
        >{{ group.topic }}</h5>
      </div>
        <table class="table p-2 table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">Paper ID</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
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
