<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill'
import { computed } from 'vue'
import { hasDeadlinePassed, type PlainDeadline } from '@/stores/Deadline'

const props = defineProps<{
  deadline: PlainDeadline
  today?: Temporal.PlainDate
}>()

const passed = computed(() => hasDeadlinePassed(props.deadline, props.today))
</script>

<template>
  <span class="badge" :class="passed ? 'text-bg-secondary' : 'text-bg-success'">
    {{ passed ? 'Passed' : 'Upcoming' }}
  </span>
</template>
