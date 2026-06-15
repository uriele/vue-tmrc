<script setup lang="ts">


const props = withDefaults(defineProps<{link?: URL, image?:URL}>(), {
  link: () => new URL('https://www.flytorrey.com/'),
  image: () => new URL('../assets/glideport.webp',import.meta.url)
})
</script>
<template>
  <PageTitle mainTitle="Dinner at the Torrey Pines Gliderport" />

  <section class="main p-4 lead row">
    <img class="col-12 col-md-6 h-100" :src="props.image?.href"/>
    <div class="col-12 col-md-6 h-100">
      <p>
        Perched atop the dramatic coastal cliffs overlooking the Pacific Ocean,
        the <a :href="props.link.href" target="_blank" rel="noopener noreferrer">Torrey Pines Gliderport</a> is one of the most renowned soaring sites in the United States.
        Since the 1930s, pilots have taken advantage of the area's unique ocean-front updrafts to fly gliders and paragliders along the scenic coastline.
        Visitors can enjoy breathtaking panoramic views of the Pacific Ocean, Black's Beach, and the Torrey Pines State Natural Reserve
        while watching colorful aircraft gracefully navigate the coastal air currents.
        The Gliderport offers tandem flights, aviation training, and a relaxed outdoor atmosphere, making it one of San Diego's most iconic recreational
        destinations and a favorite location for sightseeing and photography.
      </p>
    </div>
    <p>
      Join us for an evening of food and entertainment at the Gliderport on Monday, August 03 from 7pm to 10pm
    </p>
  </section>
</template>
