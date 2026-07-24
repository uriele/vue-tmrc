<script setup lang="ts">
const props = withDefaults(defineProps<{link?: URL}>(), {
  link: () => new URL('https://na.eventscloud.com/ereg/index.php?eventid=881128&')
})
</script>

<template>

  <PageTitle mainTitle="Kayaking" superTitle="August 5th | La Jolla Shores"
  subSubTitle="4:30-7:30pm"
  />

  <section class="main p-4 lead">
    <p>
      <strong> This event has been canceled due to low confirmed registration count </strong>
    </p>
  </section>
  <section class="main p-4 lead">
    <p>
      Kayaking will be held in <a href="https://www.californiabeaches.com/beach/la-jolla-shores-beach/" target="_blank" rel="noopener noreferrer">La Jolla Shores beach</a>
      on Wednesday, August 5 at <strong>4:30-7:30pm</strong>.
      Enjoy a two-hour guided kayaking tour at an approximate cost of $90.
      Shuttles will be provided to and from the conference to the kayaking location. Please register in this link.
      Please register <a :href="props.link.href" target="_blank" rel="noopener noreferrer">here</a>
    </p>

    <h2>
      La Jolla Shores Beach
    </h2>
    <p>
      La Jolla Shores is one of San Diego’s most scenic and welcoming beaches, known for its broad sandy shoreline, gentle waves, and beautiful views of the Pacific Ocean.
      Located near the heart of La Jolla, the beach offers an ideal setting for relaxing, walking along the coast, or enjoying ocean activities.
      One of the highlights of La Jolla Shores is kayaking, with guided tours often exploring the nearby sea caves, kelp beds, and the protected
      waters of the La Jolla Ecological Reserve. Participants may see sea lions, seabirds, colorful fish, and, depending on the season, leopard sharks in the shallow waters.
    </p>
    <p>
      With its combination of natural beauty, accessible recreation, and coastal charm, La Jolla Shores provides a memorable Southern California experience for conference attendees and guests.
    </p>
  </section>

</template>

<style scoped>
  strong {
    font-weight: bold !important;
  }
</style>
