<script setup lang="ts">
import { computed } from 'vue'
const props=defineProps({
  mainTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  subSubTitle: {
    type: String,
    required: false,
  },
  superTitle: {
    type: String,
    required: false,
  },
  bgHome: {
    type: URL,
    required: false,
  }
})
const backgroundSrc = computed(() => props.bgHome ? props.bgHome.href : '')
const hasCustomBG = computed(() => Boolean(backgroundSrc.value))
</script>

<template>
  <div class="w-100 header-inner bg-primary text-center text-secondary py-3 " :class="{ 'has-image': hasCustomBG,'mb-4':!hasCustomBG }">
    <div
      v-if="hasCustomBG"
      class="header-media"
      :style="{ backgroundImage: `url(${backgroundSrc})` }"
      aria-hidden="true"
    ></div>
    <div class="header-content">
      <h4 v-if="superTitle" class="h6 text-uppercase align-self-start mb-3">{{ superTitle }}</h4>
      <h1 class="display-4">{{ mainTitle }}</h1>
      <h2 v-if="subTitle" class="h3 text-white pt-2">{{ subTitle }}</h2>
      <h3 v-if="subSubTitle" class="h5 text-white fst-italic pt-2 pb-0">{{ subSubTitle }}</h3>
    </div>
  </div>
</template>


<style scoped>
.header-inner {
  position: relative;
  overflow: hidden;
}

.header-media {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.25;
  pointer-events: none;
}

.header-content {
  position: relative;
  z-index: 1;
}

.has-image .header-content {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}
</style>
