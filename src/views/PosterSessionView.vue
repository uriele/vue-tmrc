<script setup lang="ts">
import { type InvitedSpeaker } from '@/stores/InvitedSpeakers';
import PresenterList from '@/components/PresenterList.vue';
interface GroupTopic {
  [groupId: string]: { name: string; chair?: string, affiliation?: string }
}

interface Props{
  speakers: InvitedSpeaker[]
  groupTopic?: GroupTopic,
  isPoster?:boolean
}

const props= withDefaults(defineProps<Props>()
,{
  groupTopic: () => ({
      'P1': { name: 'Also includes posters from the invited talks of Sessions A, B, and E',
      },
      'P2': { name: 'Also includes posters from the invited talks of Sessions C, D, and F'},
    }),
    isPoster:true
})

</script>

<template>
  <PageTitle mainTitle="Poster Session" />
  <section class="main p-4 ">
    <p class="lead">
      The poster session will be held in the main lobby of Atkinson Hall, providing ample space for attendees to browse and discuss the posters.
    </p>
    <p class="lead">
      The size of each poster is limited to 70 inches wide by 48 inches high. The title, authors, and their affiliations should be prominently displayed on the poster.
       The poster authors should prepare a sign-up sheet for reprint requests. The authors are expected to be available at their posters at predefined time periods that will be staggered to allow discussions with other authors. The detailed poster schedule will be sent to all authors before the conference.
    </p>
  </section>
  <PresenterList :speakers="props.speakers" :groupTopic="props.groupTopic" :isPoster="props.isPoster"/>
</template>
