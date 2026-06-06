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
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item d-flex align-items-center justify-content-between gap-3"
      v-for="deadline in sortedDeadlines"
      :key="`${deadline.date.toString()}-${deadline.description}`"
    >
      <slot
        name="deadline"
        :deadline="deadline"
        :passed="deadline.hasPassed(props.today)"
      >
        <span>
          <strong>{{ deadline.description }}</strong>
          <span class="text-body-secondary ms-2">{{ deadline.date.toString() }}</span>
        </span>
        <DeadlineItem v-if="showStatus" :deadline="deadline" :today="today" />
      </slot>
    </li>
  </ul>
</template>
