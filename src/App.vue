<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './views/NavMenu.vue'
import type { NavLink } from './stores/NavLinks'

const logoUrl: string = new URL('./assets/ucsd/logo.png', import.meta.url).href // Replace with actual logo URL if available

const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Information', to: '/information' },
  { label: 'Committee', to: '/committee' },
  { label: 'Invited Speaker Nominations', to: '/invited-speaker-nominations' },
  { label: 'Program', to: '/program' },
  { label: 'Registration', to: '/registration' },
  { label: 'Travel', to: '/travel' },
]
</script>

<template>
  <div class="page container-fluid align-items-left p-0">
    <div class="row g-1">
      <div class="col-12 col-xxl-3">
        <NavMenu
          :navLinks="navLinks"
          :conferenceTitle="'TMRC 2026'"
          :dates="'August 3rd - 5th, 2026'"
          :logo="logoUrl"
        />
      </div>

      <div class="col-12 col-xxl-9">
        <main class="content mb-4">
          <RouterView />
        </main>

        <footer class="content p-4 mt-4 bg-primary text-secondary">
          <div class="footer-inner">
            <p>
              © Regents of the University of California, San Diego. All rights reserved. The
              University of California, San Diego is an equal opportunity educator and employer.
            </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
