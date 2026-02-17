<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import type { NavLink } from '@/stores/NavLinks'
defineProps({
  navLinks: {
    type: Array as () => NavLink[],
    required: true,
  },
  conferenceTitle: {
    type: String,
    required: true,
  },
  dates: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
})

const isxxl = ref(false)

let mql: MediaQueryList | null = null
const onMqlChange = (e: MediaQueryListEvent) => {
  isxxl.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia('(min-width: 1400px)')
  isxxl.value = mql.matches
  mql.addEventListener('change', onMqlChange)
})

onBeforeUnmount(() => {
  mql?.removeEventListener('change', onMqlChange)
})
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-xxl bg-primary align-items-xxl-start">
    <div class="container-fluid flex-xxl-column align-items-xxl-start" :class="{ 'vh-100': isxxl }">
      <a class="navbar-brand text-secondary flex-xxl-column align-items-xxl-start" href="#">
        <div :class="{ 'd-flex align-items-center': !isxxl }">
          <img
            v-if="logo"
            :src="logo"
            alt="School Logo"
            class="navbar-logo img-fluid img-logo"
            :class="{ 'mb-4': isxxl }"
          />
          <div>
            <h5 class="mb-0">{{ conferenceTitle }}</h5>
            <h6 class="mb-0">{{ dates }}</h6>
          </div>
        </div>
      </a>

      <button
        class="navbar-toggler bg-body-tertiary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-start offcanvas-xxl"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header d-xxl-none">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body d-flex flex-column">
          <div class="navbar-nav flex-xxl-column w-100" data-bs-dismiss="offcanvas">
            <RouterLink
              class="nav-link text-secondary"
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
            >
              {{ link.label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
