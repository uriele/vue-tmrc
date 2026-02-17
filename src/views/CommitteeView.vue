<script setup lang="ts">
//import { RouterLink } from 'vue-router'

const SG: string = 'Seagate Technology'
const WD: string = 'Western Digital'
const HoW: string = 'Honeywell'
const HW: string = 'TDK, Headway Technologies'
const SAM: string = 'Samsung'
const TOS: string = 'Toshiba Corporation'
const conferenceChair = [
  { name: 'Niranjan Natekar', company: WD, email: 'niranjan.natekar@wdc.com' },
]

const programCoChair = [
  { name: 'Stephanie Hernandez', company: SG, email: 'stephanie.hernandez@seagate.com' },
  { name: 'Romney Katti', company: HoW, email: 'romney.katti@honeywell.com' },
  { name: 'Tobias Maletzky', company: HW, email: 'tobias.maletzky@tdk.com' },
  { name: 'Dmytro Apalkov', company: SAM, email: 'd.apalkov@samsung.com' },
  { name: 'Yuji Nakagawa', company: TOS, email: 'yuji.nagakawa.d94@mail.toshiba' },
]

const TOHAKU: string = 'Tohoku University'
const KIOXIA: string = 'Kioxia'
const UFL: string = 'University of Florida'
const AVA: string = 'Avalanche Technology'
const UCSD: string = 'UCSD'
const KMITL: string = 'KMITL'
const NIST: string = 'NIST'
const NTU: string = 'NTU'

const posterCoChair = [
  { name: 'Simon Greaves', company: TOHAKU, email: 'simon@riec.tohoku.ac.jp' },
  { name: 'Masahiko Nakayama', company: KIOXIA, email: 'masahiko1.nakayama@kioxia.com' },
  { name: 'Yingying Wu', company: UFL, email: 'yingyingwu@ufl.edu' },
  { name: 'Guanzhong Wu', company: AVA, email: 'guanzhongwu@avalanche-technology.com' },
]

const localCoChair = [
  { name: 'Eric Fullerton', company: UCSD, email: 'efullerton@ucsd.edu' },
  { name: 'Vitaliy Lomakin', company: UCSD, email: 'vlomakin@ucsd.edu' },
]

const publicationCoChair = [
  { name: 'Chanon Warisarn', company: KMITL, email: 'chanon.wa@kmitl.ac.th' },
  { name: 'Brandon Zink', company: NIST, email: 'brandon.zink@nist.gov' },
]

const publicityCoChair = [{ name: 'S.N. Piramanayagam', company: NTU, email: 'prem@ntu.edu.sg' }]

const treasurer = [
  { name: 'Jan-Ulrich Thiele', company: SG, email: 'jan-ulrich.thiele@seagate.com' },
]

const CNR: string = 'CNR-ISAC'

const technicalChair = [{ name: 'Marco Menarini', company: CNR, email: 'm.menarini@isac.cnr.it' }]
</script>

<template>
  <PageTitle mainTitle="Committee" />
  <section class="main">
    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Conference chair</h1>
      <template v-for="person in conferenceChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Program co-chairs</h1>
      <template v-for="person in programCoChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Poster co-chairs</h1>
      <template v-for="person in posterCoChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Local co-chairs</h1>
      <template v-for="person in localCoChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Publication co-chairs</h1>
      <template v-for="person in publicationCoChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>
    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Publicity co-chair</h1>
      <template v-for="person in publicityCoChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Treasurer</h1>
      <template v-for="person in treasurer" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>

    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Technical chair - Web & IT</h1>
      <template v-for="person in technicalChair" :key="person.email">
        <p class="lead reveal" style="--delay: 0.2s">
          {{ person.name }},{{ person.company }} –
          <a :href="`mailto:${person.email}`">{{ person.email }}</a>
        </p>
      </template>
    </div>
  </section>
</template>
