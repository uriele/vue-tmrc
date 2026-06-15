<script setup lang="ts">
const props = withDefaults(defineProps<{link?: URL}>(), {
  link: () => new URL('https://na.eventscloud.com/ereg/index.php?eventid=881128&')
})
</script>

<template>

  <PageTitle mainTitle="Kayaking" />

  <section class="main p-4 lead">
    <p>
      You cannot attend a conference in San Diego and not kayak the La Jolla waters. Enjoy a two-hour guided kayaking tour at an approximate cost of $90. Shuttles will be provided to and from the conference to the kayaking location.
      Please register <a :href="props.link.href" target="_blank" rel="noopener noreferrer">here</a>
    </p>
  </section>
</template>
