<script setup lang="ts">
import { Temporal } from '@js-temporal/polyfill'
import { computed } from 'vue'
import { type Deadline } from '@/stores/Deadline'

const props = defineProps<{
  deadline: Deadline
  today?: Temporal.PlainDate
}>()

const passed = computed(() => props.deadline.hasPassed(props.today))
</script>

<template>
  <span class="badge" :class="passed ? 'text-bg-secondary' : 'text-bg-success'">
    {{ passed ? 'Passed' : 'Upcoming' }}
  </span>
</template>
