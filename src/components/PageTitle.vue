<script setup lang="ts">
defineProps({
  mainTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  subSubtitle: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="w-100 header-inner text-center text-secondary bg-primary py-5 mb-4">
    <h1 class="display-4">{{ mainTitle }}</h1>
    <h2 v-if="subTitle" class="h3">{{ subTitle }}</h2>
    <h3 v-if="subSubtitle" class="h5">{{ subSubtitle }}</h3>
  </div>
</template>
