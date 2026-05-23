<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavMenu from './views/NavMenu.vue'
import { NAVLINKS } from '@/router/routerConstants'
import { useThemeMode } from '@/composables/useThemeMode'

const logoUrl: string = new URL('./assets/ucsd/logo.png', import.meta.url).href // Replace with actual logo URL if available

const { selectedMode, nextMode } = useThemeMode()

</script>

<template>
  <div class="page container-fluid align-items-left p-0">
    <button @click="nextMode()">
    <i v-if="selectedMode === 'dark'" i-carbon-moon inline-block align-middle class="align-middle" />
    <i v-if="selectedMode === 'light'" i-carbon-sun inline-block align-middle class="align-middle" />
    <i v-if="selectedMode === 'auto'" i-carbon-laptop inline-block align-middle class="align-middle" />

    <span class="ml-2 capitalize">Testing {{ selectedMode }} mode</span>
    </button>
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
        <main class="content">
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
