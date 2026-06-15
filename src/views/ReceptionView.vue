<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue';

interface Section {
  title: string,
  description: string,
  image?:URL
}

const props=withDefaults(defineProps<{sections?:Section[],complete?:boolean}>(),
{sections: () =>
[{title:"UC San Diego (UCSD)",
  description:"The University of California San Diego is one of the world's leading public research universities, recognized for excellence in engineering, physical sciences, medicine, and interdisciplinary innovation. Located on the Pacific coast in La Jolla, California, UC San Diego is home to more than 40,000 students and numerous nationally recognized research centers. The campus combines cutting-edge research facilities with striking architecture, public art installations, and scenic ocean views. Consistently ranked among the top universities globally, UC San Diego fosters collaboration across disciplines and serves as a hub for scientific discovery, entrepreneurship, and technology development. Its proximity to major biotechnology, telecommunications, and defense industries makes it a key contributor to the innovation ecosystem of Southern California."
},
{title:"Center for Memory and Recording Research (CMRR)",
 description:"The Center for Memory and Recording Research (CMRR) is a premier research facility at UC San Diego dedicated to advancing data storage technologies and information systems. Established through strong partnerships with industry leaders, CMRR conducts pioneering research in magnetic recording, spintronics, storage devices, and emerging information technologies. The center brings together faculty, students, and industrial collaborators from multiple disciplines to address challenges in high-density data storage and next-generation computing systems. CMRR has played a significant role in the development of technologies that underpin modern hard disk drives and other memory devices, making it one of the world's most influential academic centers in the field of information storage research."
}
]
})
</script>

<template>
  <PageTitle mainTitle="Conference Reception" />
    <section class="main p-4 lead" v-for="section in props.sections" :key="section.title">
      <h2>{{section.title}} </h2>
      <img v-if="section.image" :src="section.image.href" class="vw-100 h-auto">
      <p>{{section.description}}</p>
    </section>
    <section class="main p-4 lead" v-if="!props.complete" >
    <p> More details for the reception will be added soon </p>
    </section>
</template>
