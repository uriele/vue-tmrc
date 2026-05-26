<script setup lang="ts">
import { computed } from 'vue'
  const props=defineProps<{
    link: URL;
  }>()

const link = computed(() => props.link.href || '#') ;
</script>
<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <img src="@/assets/instagram-logo.png" alt="Instagram" class="box" />
  </a>
</template>
<style scoped>
  .box {
    height: 50px;
  }
</style>

