<script setup lang="ts">
  import DownloadButton from '@/components/DownloadButton.vue';
//  import { VuePDF, usePDF } from '@tato30/vue-pdf'
  import type { DownloadLink } from '@/stores/DownloadLinks'
  const props = defineProps<{
    download: DownloadLink
  }>()


/*const digest= computed(() => {
  const {pdf}=usePDF({
  url: props.download.url,
  enableXfa: true,
})
return pdf
}
)

const {pdf}=usePDF({
  url: props.download.url,
  enableXfa: true,
})

*/
</script>

<template>
  <PageTitle mainTitle="Digest Book"/>
  <section class="main p-4 lead">
    <p>
      The Digest Book is available for download below. The Digest Book contains the abstracts for all accepted papers and posters.
    </p>
    <DownloadButton :downloads="props.download" />
  </section>
  <!--
  <section class="main p-4 lead">
    <VuePDF :pdf="pdf" class="w-100 h-100"/>
  </section>
  -->
</template>
