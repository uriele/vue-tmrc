<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { DownloadLink } from '@/stores/DownloadLinks'
import DownloadButton from '@/components/DownloadButton.vue'

defineProps<{
  downloads: DownloadLink[]
}>()

</script>

<template>
  <PageTitle mainTitle="Digest Submission" />
  <section class="main p-4">
    <p class="lead">
      All invited speakers and poster presenters must submit a two page digest for inclusion in the TMRC Digest Book. We also encourage authors to upload their digests to IEEE Xplore. Each published digest will receive its own digital object identifier (DOI) and be citable. Instructions on how to do this will be sent to authors later in the year.
    </p>
    <p class="lead">
      Please use one of the templates below to prepare your digest.
    </p>
    <div class="d-flex justify-content-center align-items-center gap-4 p-2">
      <DownloadButton v-for="download in downloads" :key="download.filename" :downloads="download" />
    </div>
    <p class="lead">
      If you submit a PDF file, please ensure that all fonts are embedded in the file. To embed fonts in PDFs created by MS Word you should click "Create PDF/XPS", then click "Options", then check the "PDF/A compliant" box. If you are using LaTex you should make your PDF with the option "-dEmbedAllFonts=true".
    </p>

  </section>
</template>
