<script setup lang="ts">
import type { DownloadLink } from '@/stores/DownloadLinks';
import DownloadButton from '@/components/DownloadButton.vue';
interface Props{
  link: URL,
  downloads?: DownloadLink[]
}
const ieeexploreLink = new URL('https://ieeeexpressconferencepublishing.ieee.org/confid/tmrc/');
const props=defineProps<Props>()
</script>

<template>
  <PageTitle mainTitle="Publication Information" />
  <section class="main p-4 lead">
    <p>
      TMRC digests are eligible for publication in IEEE Magnetics Society Conference Proceedings on IEEE Xplore. Published digests will receive their own digital object identifiers (DOI) and be citeable. Publication of your two-page digest should not prevent you from publishing a full paper later; IEEE journals would only ask that you cite your conference digest.
    </p>
    <p>
      The two-page digests can be published at the link: <a :href="ieeexploreLink.href" target="_blank" rel="noopener noreferrer">https://ieeeexpressconferencepublishing.ieee.org/confid/tmrc/</a> . Deadline for the digest publication on IEEE Xplore is August 31, 2026 . Author Instructions for publication are provided at the referenced link. Please note that the two-page digest separate from the paper, and will be considered for publication in IEEE Transactions on Magnetics journal
    </p>
    <p>
      Full manuscripts can be published in IEEE Transactions on Magnetics (subject to peer review).
       Papers must be submitted before July 26th through the <a :href="props.link.href" target="_blank" rel="noopener noreferrer">IEEE AUTHOR PORTAL</a> website. The suggested lengths for contributed (posters) and invited papers are five pages and seven pages, respectively. The maximum paper length allowed by the journal is fourteen pages.
    </p>
    <p> Instructions to submit your manuscript to the conference can be found here: </p>

    <div class="d-flex justify-content-center align-items-center gap-4 p-2">
      <DownloadButton v-for="download in props.downloads" :key="download.filename" :downloads="download" />
    </div>
  </section>
</template>
