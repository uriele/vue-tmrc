<script setup lang="ts">
//import { RouterLink } from 'vue-router'
import PageTitle from '@/components/PageTitle.vue'
import UCSDCarousel from '@/components/UCSDCarousel.vue'
import SponsorThanks from '../components/SponsorThanks.vue';
import { CORPORATESPONSORS, LOCALHOSTS,SPONSORS } from '@/router/routerConstants';
import { useThemeMode } from '@/composables/useThemeMode';
//import { LoopScroll } from "@joyday/vue-loop-scroll";
import TwitterLink from '@/components/TwitterLink.vue';
import InstagramLink from '@/components/InstagramLink.vue';
import { computed } from 'vue'
defineProps({
  formLink: {
    type: String,
    required: true,
  },
  chairsEmail: {
    type: String,
    required: true,
  },
  twitterLink: {
    type: URL,
    required: false,
    default: new URL('https://x.com/ieeetmrc'),
  },
  instagramLink: {
    type: URL,
    required: false,
    default: new URL('https://www.instagram.com/ieeetmrc/'),
  },
})
const { isLight } = useThemeMode()
const HomeBg = new URL('../assets/home-bg.jpg', import.meta.url)

interface DataSourceItem {
  id: number;
  value: string;
  link?: string | URL;
}

const dataSource: DataSourceItem[] = [{
  id:1,value:"    Registration is now open. Please reserve your spot at the conference                    ",
  link: 'conference-registration'}];

const reversedSource= computed(()=> dataSource.slice().reverse())
</script>

<template>
  <PageTitle
    mainTitle="Welcome to TMRC 2026"
    subTitle="The 37th Magnetic Recording Conference"
    superTitle="August 2nd – August 5th, 2026 | University of California, San Diego"
    subSubTitle="Sponsored by IEEE and the IEEE Magnetics Society"
    :bgHome="HomeBg"
  />
  <div class="box pb-1 pt-1 ps-3 text-center"
  :class="{' card-light text-secondary':isLight, 'bg-primary text-secondary':!isLight}"
  >
  <div v-for="item in reversedSource" :key="item.id"
  class="fs-4"
  >
        <RouterLink v-if="item.link" :to="item.link"
        class="announcment-link"
        >{{ item.value }}</RouterLink>
        <span v-else>{{ item.value }}</span>
    </div>
  </div>
  <section class="main p-4 row">
    <UCSDCarousel class="col-12 col-md-6 h-100"/>

    <div class="col-12 col-md-6 h-100">
      <p class="lead reveal" style="--delay: 0.2s">
     The 37th Magnetic Recording Conference will be held at University of California, San Diego from <strong>August 2nd to August 5th, 2026</strong>.
     The focus of TMRC 2026 is Solid State Magnetic Memory, Storage Architectures for Artificial Intelligence and Recording Technologies for > 4 Tbits/in2.
     TMRC 2026 will celebrate seven decades of magnetic recording with an exciting array of 45 invited talks. These talks from members of industry and academia
     will be followed by Bierstube and poster sessions. TMRC 2026 will contain a number of firsts: a collaborative session with the IEEE Standards Committee,
     a pre-conference reception, dinner at the UCSD Gliderport and an opportunity to kayak in the waters of La Jolla.
      </p>
      <p class="lead reveal" style="--delay: 0.2s">
        Be sure to attend the conference to be a part of exciting discussions on developments in Solid State Memories, Magnetic Recording, Alternative Data Storage Architectures and a lot more!
      </p>
    </div>


  </section>
  <section class="main p-4">
    <SponsorThanks
    :normalSponsors="SPONSORS"
    :localSponsors="LOCALHOSTS"
    :corporateSponsors="CORPORATESPONSORS" />


  </section>
  <div
  class="d-flex flex-row justify-content-center align-items-center gap-2">
    <TwitterLink :isLight="isLight" :link="twitterLink"/>
    <InstagramLink :link="instagramLink" />
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height:auto;
  :deep(.scroll-loop-item) {
    padding-right: 20rem;
  }
}

a.announcment-link {
  text-decoration: none;
  color: inherit;
}

a.announcment-link:hover {
  text-decoration: underline;
}

strong {
  font-weight: bold !important;
}
</style>
