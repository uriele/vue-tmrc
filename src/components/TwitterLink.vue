<script setup lang="ts">
import { computed } from 'vue'
const props=defineProps<{
  isLight: boolean;
  link: URL;
 }>()

const link = computed(() => props.link.href || '#') ;
</script>


<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <img v-if="isLight" src="@/assets/twitter-black.jpg" alt="Twitter" class="box"/>
    <img v-else src="@/assets/twitter-white.jpg" alt="Twitter" class="box" />
  </a>
</template>
<style scoped>
  .box {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
