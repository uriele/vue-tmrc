<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

const props = withDefaults(
  defineProps<{
    fileStem: string
    label?: string
    directory?: string
    extension?: string
  }>(),
  {
    label: 'Digest',
    directory: '/downloads/digest',
    extension: 'pdf',
  },
)

// flag for existing file
const exists = ref(false)


const fileUrl = computed(() => {
  // regex: remove trailing slash from directory and leading dot from extension
  const directory = props.directory.replace(/\/$/, '')
  const extension = props.extension.replace(/^\./, '')
  const fileStem = props.fileStem.trim()

  //encodeURIComponent to handle special characters in the file name (safety measure)
  return `${directory}/${encodeURIComponent(fileStem)}.${extension}`
})

watchEffect(async (onCleanup) => {
  exists.value = false

  if (!props.fileStem.trim()) return

  const controller = new AbortController()
  onCleanup(() => controller.abort())

  try {
    const response = await fetch(fileUrl.value, {
      method: 'HEAD',
      signal: controller.signal,
    })
    //response.ok returns true if the response status is in the range 200-299
    // otherwise, it returns false.
    exists.value = response.ok
  } catch (error) {
    if (!(error instanceof DOMException && error.name === 'AbortError')) {
      exists.value = false
    }
  }
})
</script>

<template>
  <a
    v-if="exists"
    :href="fileUrl"
    class="btn btn-primary text-secondary btn-sm"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ label }}
  </a>
</template>
