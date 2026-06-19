<script setup lang="ts">

import PageTitle from '@/components/PageTitle.vue';
import { Temporal } from '@js-temporal/polyfill'
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
import PresenterList from '@/components/PresenterList.vue'

interface GroupTopic {
  [groupId: string]: { name: string; chair: string, affiliation: string }
}

interface Props{
  speakers?: InvitedSpeaker[]
  groupTopic?: GroupTopic,
  isPoster?:boolean
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
    }),
    isPoster:false
})

</script>
<template>
  <PageTitle mainTitle="Invited Speakers" />
  <PresenterList :speakers="props.speakers" :groupTopic="props.groupTopic" :isPoster="props.isPoster"/>
</template>
