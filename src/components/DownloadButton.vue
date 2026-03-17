<script setup lang="ts">
import { useFetch} from '@vueuse/core'
import type { DownloadLink } from '@/stores/DownloadLinks'
defineProps<{
  downloads: DownloadLink
}>()

async function downloadFile(url: string, filename: string) {

  const {data} = await useFetch<Blob | MediaSource>(url)
    .get()
    .blob();


  console.log('Downloading file from:', url);
  console.dir(data.value);
  if (data.value) {
    const FileUrl = window.URL.createObjectURL(data.value);
    const a = document.createElement('a');
    a.href = FileUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(FileUrl);
  }
};
</script>

<template>
  <button class="btn btn-primary text-secondary w-25 rounded shadow btn-sm self-center min-w-fit" @click="downloadFile(downloads.url, downloads.filename)">
    {{ downloads.label }}
  </button>
</template>
