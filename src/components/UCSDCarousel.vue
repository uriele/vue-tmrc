<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const images: string[] = [
  new URL('../assets/ucsd/ucsd1.jpg', import.meta.url).href,
  new URL('../assets/ucsd/ucsd2.jpg', import.meta.url).href,
  new URL('../assets/ucsd/ucsd3.jpg', import.meta.url).href,
  new URL('../assets/ucsd/ucsd4.jpg', import.meta.url).href,
]

const carouselEl = ref<HTMLElement | null>(null)
</script>
<template>
  <div id="carouselUCSDAutoplaying" ref="carouselEl" class="carousel slide">
    <div class="carousel-inner center">
      <div
        class="carousel-item"
        v-for="(image, index) in images"
        :key="image"
        :class="{ active: index === 0 }"
      >
        <img :src="image" class="w-100 object-contain bg-black" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselUCSDAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselUCSDAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
