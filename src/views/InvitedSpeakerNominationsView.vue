<script setup lang="ts">
defineProps({
  formLink: {
    type: String,
    required: true,
  },
  chairsEmail: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <PageTitle mainTitle="Invited Speaker Nominations" />
  <section class="main p-4">
    <p class="lead reveal" style="--delay: 0.2s">
      To nominate an invited speaker, please complete our
      <a :href="`${formLink}`" target="_blank" rel="noopener noreferrer">online nomination form</a>
      (preferred) or
      <a :href="`mailto:${chairsEmail}`">email the Program Chairs directly</a>. For Topics of
      Interest, please visit <RouterLink to="/">Home</RouterLink>.
    </p>
    <h3 class="reveal text-decoration-underline" style="--delay: 0.4s">The deadline for nominations has been extended to April 10th, 2026.</h3>
  </section>
</template>
