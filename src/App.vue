<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './views/NavMenu.vue'
import { NAVLINKS } from '@/router/routerConstants'
import { useThemeMode } from '@/composables/useThemeMode'

const logoUrl: string = new URL('./assets/ucsd/logo.png', import.meta.url).href // Replace with actual logo URL if available

useThemeMode()

</script>

<template>
  <div class="page container-fluid align-items-left p-0">
    <div class="row g-1">

      <div class="col-12 col-xxl-3">
        <NavMenu
          :navLinks="NAVLINKS"
          :conferenceTitle="'TMRC 2026'"
          :dates="'August 3rd - 5th, 2026'"
          :logo="logoUrl"
        />
      </div>

      <div class="col-12 col-xxl-9 d-flex flex-column justify-content-between overflow-auto">
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
