<script setup lang="ts">
const images = [
  'src/assets/ucsd/ucsd1.jpg',
  'src/assets/ucsd/ucsd2.jpg',
  'src/assets/ucsd/ucsd3.jpg',
  'src/assets/ucsd/ucsd4.jpg',
]
</script>
<template>
  <div id="carouselUCSDAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner center">
      <div
        class="carousel-item"
        v-for="(image, index) in images"
        :key="image"
        :class="{ active: index === 0 }"
      >
        <img :src="image" as string class="w-100 object-contain bg-black" />
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
