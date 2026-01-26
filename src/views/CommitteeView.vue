<script setup lang="ts">
import { RouterLink } from 'vue-router'

const SG: string ='Seagate Technology';
const WD: string ='Western Digital';
const HoW: string= 'Honeywell';
const HW: string='Headway';


const conferenceChair = [
  { name: 'Stephanie Hernandez', company:SG,email:'stephanie.hernandez@seagate.com' }
]

const programCoChair =[
  { name: 'Tiffany Santos', company:WD,email:'tiffany.santos@wdc.com' },
  { name: 'Romney Katti', company:HoW,email:'romney.katti@honeywell.com' },
  { name: 'Olle Heinonen', company:SG,email:'olle.heinonen@seagate.com' },
  { name: 'Tobias Maletzky', company:HW,email:'tobias.maletzky@headway.com' }
]
</script>

<template>
<section class="hero">
    <div class="hero-text">
      <h1 class="reveal" style="--delay: 0.1s">Conference chair</h1>
      <p  class="lead reveal" style="--delay: 0.2s" v-for='person in conferenceChair'>
        {{person.name}},{{person.company}} –
        <a href="mailto:{{person.email}}">{{person.email}}</a>
      </p>
    </div>

    <div class="hero-text">
      <h1  class="reveal" style="--delay: 0.1s">Program co-chairs</h1>
      <p  class="lead reveal" style="--delay: 0.2s" v-for='person in programCoChair'>
        {{person.name}},{{person.company}} –
        <a href="mailto:{{person.email}}">{{person.email}}</a>
      </p>
    </div>
  </section>
</template>
