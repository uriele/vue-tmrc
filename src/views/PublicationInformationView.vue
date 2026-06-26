<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { DownloadLink } from '@/stores/DownloadLinks';
import DownloadButton from '@/components/DownloadButton.vue';
interface Props{
  link?: URL,
  downloads?: DownloadLink[]
}

defineProps<Props>()
</script>

<template>
  <PageTitle mainTitle="Publication Information" />
  <section class="main p-4">
    <p class="lead">
      TMRC digests are eligible for publication in IEEE Magnetics Society Conference Proceedings on IEEE Xplore. Published digests will receive their own digital object identifiers (DOI) and be citeable. Publication of your two-page digest should not prevent you from publishing a full paper later; IEEE journals would only ask that you cite your conference digest.
    </p>
    <p class="lead">
      Full manuscripts can be published in IEEE Transactions on Magnetics (subject to peer review).
       Papers must be submitted before July 26th through the <a :href="link?.href" target="_blank" rel="noopener noreferrer">IEEE AUTHOR PORTAL</a> website. The suggested lengths for contributed (posters) and invited papers are five pages and seven pages, respectively. The maximum paper length allowed by the journal is fourteen pages.
    </p>
    <p class="lead"> Instructions to submit your manuscript to the conference can be found here: </p>

    <div class="d-flex justify-content-center align-items-center gap-4 p-2">
      <DownloadButton v-for="download in downloads" :key="download.filename" :downloads="download" />
    </div>
  </section>
</template>
