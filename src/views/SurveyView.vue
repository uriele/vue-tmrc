<script setup lang="ts">
import DownloadButton from '@/components/DownloadButton.vue';
import type { DownloadLink } from '@/stores/DownloadLinks'
import PageTitle from '@/components/PageTitle.vue';
import {SURVEYRESULTLINK} from '@/router/routerConstants';
const props=withDefaults(defineProps<{link?:URL, surveyResultLink?:DownloadLink}>(),
{
  link: ()=> new URL('https://www.surveymonkey.com/r/99QFVL3'),
  surveyResultLink: () => SURVEYRESULTLINK
})
</script>

<template>
  <PageTitle mainTitle="TMRC 2026 Survey"/>
  <section class="main p-4 lead">
    <p>We value your opinion on technology intercepts for HDD and MRAM industry.
      Please see the results for the TMRC 2026 survey below:
    </p>
    <div class="d-flex justify-content-center gap-4">
      <DownloadButton class="lead" :downloads="props.surveyResultLink" buttonText="Download Survey Results" />
    </div>
  </section>
</template>
