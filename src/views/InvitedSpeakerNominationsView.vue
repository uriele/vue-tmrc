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
      <a :href="`${formLink}`">online nomination form</a>
      (preferred) or
      <a :href="`mailto:${chairsEmail}`">email the Program Chairs directly</a>. For Topics of
      Interest, please visit <RouterLink to="/">Home</RouterLink>.
    </p>
  </section>
</template>
