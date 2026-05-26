<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { InvitedSpeaker } from '@/stores/InvitedSpeakers';
import { KEYNOTESPEAKER } from '@/router/routerConstants';
interface Props{
 keynoteSpeaker?: InvitedSpeaker
}
const props= withDefaults(defineProps<Props>(), {
  keynoteSpeaker: () => KEYNOTESPEAKER 
})
</script>

<template>
  <PageTitle mainTitle="Keynote Speaker" />
  <section class="main p-4">
    <div class="d-flex flex-row gap-4">
       <img :src="props.keynoteSpeaker.photoUrl.href" alt="Keynote Speaker Photo" class="img-fluid rounded img-thumbnail" v-if="props.keynoteSpeaker.photoUrl"/>
        <p v-if="props.keynoteSpeaker.biography" class="paragraph">{{ props.keynoteSpeaker.biography }}</p>
    </div>
    <div class="row g-4 mt-4">
        <h2>{{ props.keynoteSpeaker.title }}</h2>
        <p v-if="props.keynoteSpeaker.abstract" class="paragraph">{{ props.keynoteSpeaker.abstract }}</p>
    </div>
  </section>
</template>

<style scoped>
.img-thumbnail {
  min-height: 200px;
  max-height: 250px;
  aspect-ratio: auto;
}

.paragraph {
  white-space: pre-line;
}
</style>