<script setup lang="ts">
//import { RouterLink } from 'vue-router'
import CommitteeItem from '@/components/CommitteeItem.vue'
import type { Person, RoleTypes } from '@/stores/Person'
import { computed } from 'vue'
const props=defineProps({
  committee: {
    type: Array as () => Person[],
    required: true,
  },
})

const roleTypes: RoleTypes[] = ['Conference Chair','Program Co-Chair', 'Poster Co-Chair', 'Local Co-Chair', 'Publication Co-Chair', 'Publicity Co-Chair', 'Treasurer', 'Technical Chair']

const sortedCommittee = computed(() => {
  let sorted: Person[] = [];
  for (const roleType of roleTypes) {
    const personsWithRole = props.committee.filter(p => p.role === roleType)
    if (personsWithRole.length > 0) {
      sorted = sorted.concat(personsWithRole)
    }
  }
  return sorted
})


</script>

<template>
  <PageTitle mainTitle="Committee" />
  <section class="main p-4">
    <div class="row g-4">
        <!--

      <div v-for="roleType in roleTypes" :key="roleType">
        <h1 class="reveal text-capitalize" style="--delay: 0.1s" v-if="committee.some(p => p.role === roleType)">{{ roleType }}</h1>
        <CommitteeItem class="ps-4" v-for="person in committee.filter(p => p.role === roleType)" :key="person.email" :person="person"/>
        -->
        <div
          v-for="person in sortedCommittee"
          :key="person.email"
          class="col-12 col-sm-6 col-lg-4 d-flex"
        >
          <CommitteeItem class="w-100" :person="person"/>
        </div>
      </div>
      <!--
    </div>
    -->
  </section>
</template>
