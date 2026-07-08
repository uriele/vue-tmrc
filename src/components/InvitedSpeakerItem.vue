<script setup lang="ts">
import DigestFileLink from '@/components/DigestFileLink.vue'
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers'
//import { Temporal } from '@js-temporal/polyfill'
import {computed} from 'vue'
const props = defineProps<{speaker:InvitedSpeaker,isPoster?:boolean}>()
const startTime = computed(() => {
  if (!props.speaker.date) return ''
  return `${props.speaker.date.hour.toString().padStart(2,'0')}:${props.speaker.date.minute.toString().padStart(2,'0')}`

})

const digestFileStem = computed(() => {
  const groupId = props.speaker.groupId?.toUpperCase() ?? ''
  const separator = groupId.startsWith('P') ? '-' : ''

  return `${groupId}${separator}${props.speaker.paperId ?? ''}`
})

</script>

<template>
        <tr v-if="props.isPoster">
          <th scope="col">{{ speaker.groupId}}-{{speaker.paperId}}</th>
          <td>{{ speaker.title }}</td>
          <td>{{ speaker.name }}</td>
          <td>{{ speaker.affiliation }}</td>
          <td><DigestFileLink :file-stem="digestFileStem" /></td>
        </tr>
        <tr v-else>
          <th  scope="col">{{ speaker.groupId}}-{{speaker.paperId}}</th>
          <td>{{ startTime }}</td>
          <td>{{ speaker.name }}</td>
          <td>{{ speaker.affiliation }}</td>
          <td>{{ speaker.title }}</td>
          <td><DigestFileLink :file-stem="digestFileStem" /></td>
        </tr>
</template>
