<script setup lang="ts">
//import { RouterLink } from 'vue-router'
import CommitteeItem from '@/components/CommitteeItem.vue'
import type { Person, RoleTypes } from '@/stores/Person'
defineProps({
  committee: {
    type: Array as () => Person[],
    required: true,
  },
})

const roleTypes: RoleTypes[] = ['Program Co-Chair', 'Poster Co-Chair', 'Local Co-Chair', 'Publication Co-Chair', 'Publicity Co-Chair', 'Treasurer', 'Technical Chair']
</script>

<template>
  <PageTitle mainTitle="Committee" />
  <section class="main p-4">
    <div class="main-text">
      <div v-for="roleType in roleTypes" :key="roleType">
        <h1 class="reveal text-capitalize" style="--delay: 0.1s" v-if="committee.some(p => p.role === roleType)">{{ roleType }}</h1>
        <CommitteeItem class="ps-4" v-for="person in committee.filter(p => p.role === roleType)" :key="person.email" :person="person"/>
      </div>
    </div>
  </section>
</template>
