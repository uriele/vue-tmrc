<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';

const props=withDefaults(defineProps<{link?:URL}>(),
{
  link: ()=> new URL('https://www.surveymonkey.com/r/99QFVL3')
})
</script>

<template>
  <PageTitle mainTitle="TMRC 2026 Survey"/>
  <section class="main p-4 lead">
    <p>We value your opinion on technology intercepts for HDD and MRAM industry.
      Please complete the <a :href="props.link.href"  target="_blank" rel="noopener noreferrer">survey</a> and provide your inputs
    </p>
  </section>
</template>
