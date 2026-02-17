<script setup lang="ts">
import { ref } from 'vue'

type Slide =
  | {
      kind: 'image'
      src: string
      alt?: string
      first?: boolean
    }
  | {
      kind: 'video'
      src: string
      title?: string
      first?: boolean
    }
const slides: Slide[] = [
  {
    kind: 'video',
    src: new URL('../assets/ucsd/tmrc2026.mp4', import.meta.url).href,
    title: 'UCSD Video',
    first: true,
  },
  { kind: 'image', src: new URL('../assets/ucsd/ucsd1.jpg', import.meta.url).href },
  { kind: 'image', src: new URL('../assets/ucsd/ucsd2.jpg', import.meta.url).href },
  { kind: 'image', src: new URL('../assets/ucsd/ucsd3.jpg', import.meta.url).href },
  { kind: 'image', src: new URL('../assets/ucsd/ucsd4.jpg', import.meta.url).href },
]

const carouselEl = ref<HTMLElement | null>(null)
</script>
<template>
  <div
    id="carouselUCSDAutoplaying"
    ref="carouselEl"
    class="carousel slide mb-4"
    data-bs-ride="carousel"
    data-bs-interval="5000"
  >
    <div class="carousel-inner center">
      <div
        class="carousel-item"
        v-for="slide in slides"
        :key="slide.kind"
        :class="{ active: slide.first }"
      >
        <!-- IMAGE -->
        <img
          v-if="slide.kind === 'image'"
          :src="slide.src"
          :alt="slide.alt ?? ''"
          class="w-100 object-contain bg-black carousel-item-height d-block"
        />

        <!-- VIDEO -->
        <div
          v-else
          class="w-100object-contain bg-black carousel-item-height d-flex justify-content-center align-items-center"
        >
          <video :src="slide.src" class="img-fluid" autoplay loop muted />
        </div>
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
