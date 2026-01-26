<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Information', to: '/information' },
  { label: 'Committee', to: '/committee' },
  { label: 'Program', to: '/program' },
  { label: 'Registration', to: '/registration' },
  { label: 'Travel', to: '/travel' },
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="site">
    <div class="backdrop" aria-hidden="true">
      <span class="glow glow-one"></span>
      <span class="glow glow-two"></span>
      <span class="glow glow-three"></span>
    </div>

    <header class="site-header">
      <div class="header-inner">
        <RouterLink class="brand" to="/" @click="closeMenu">
          <span class="brand-mark">The 36th Magnetic Recording Conference</span>
          <span class="brand-tag">August 3rd – August 5th,  2026</span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          aria-controls="primary-nav"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">Toggle navigation</span>
          <span
              v-for="i in 3"
              :key="i"
              class="menu-bar"
          />
        </button>

        <nav id="primary-nav" class="nav-panel" :class="{ open: isMenuOpen }" aria-label="Primary">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            class="nav-link"
            :to="link.to"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <div class="site-body">
      <main class="page">
        <RouterView />
      </main>

      <footer class="site-footer">
        <div class="footer-inner">
          <p>© Regents of the University of California, San Diego. All rights reserved. The University of California, San Diego is an equal opportunity educator and employer.</p>
        </div>
      </footer>
    </div>
  </div>
</template>
