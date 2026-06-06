<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill'
import { computed } from 'vue'
import DeadlineItem from '@/components/DeadlineItem.vue'
import {   sortDeadlines, type Deadline } from '@/stores/Deadline'

const props = withDefaults(
  defineProps<{
    deadlines: Deadline[]
    order?: 'ascendent' | 'descendent'
    showStatus?: boolean
    today?: Temporal.PlainDate
  }>(),
  {
    order: 'ascendent',
    showStatus: true,
  },
)

const sortedDeadlines = computed(() => sortDeadlines(props.deadlines, props.order))
</script>

<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th v-if="showStatus">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="deadline in sortedDeadlines"
        :key="`${deadline.date.toString()}-${deadline.description}`"
      >
        <th scope="row">{{ deadline.date.toString() }}</th>
        <td>{{ deadline.description }}</td>
        <td v-if="showStatus">
          <DeadlineItem :deadline="deadline" :today="today" />
        </td>
      </tr>
    </tbody>
  </table>
  </template>
