<script setup lang="ts">
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
//import { Temporal } from '@js-temporal/polyfill'
import {computed} from 'vue'
const props = defineProps<{speaker:InvitedSpeaker,isPoster?:boolean}>()
const startTime = computed(() => {
  if (!props.speaker.date) return ''
  return `${props.speaker.date.hour.toString().padStart(2,'0')}:${props.speaker.date.minute.toString().padStart(2,'0')}`

})

/*
const endTime = computed(() => {
  if (!props.speaker.date || !props.speaker.len) return ''
  const endDate = Temporal.ZonedDateTime.from(props.speaker.date).add({ minutes: props.speaker.len })
  return `${endDate.hour.toString().padStart(2,'0')}:${endDate.minute.toString().padStart(2,'0')}`
})

const fullpaperId=computed(() => {
  return `${props.speaker.groupId?.toUpperCase() ?? ''}${props.speaker.paperId ?? ''}`
})
*/
</script>

<template>
        <tr v-if="props.isPoster">
          <td>{{ speaker.title }}</td>
          <td>{{ speaker.name }}</td>
          <td>{{ speaker.affiliation }}</td>
        </tr>
        <tr v-else>
          <td>{{ startTime }}</td>
          <td>{{ speaker.name }}</td>
          <td>{{ speaker.affiliation }}</td>
          <td>{{ speaker.title }}</td>
        </tr>
</template>
