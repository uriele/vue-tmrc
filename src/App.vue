<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Information', to: '/information' },
  { label: 'Committee', to: '/committee' },
  { label: 'Program', to: '/program' },
  { label: 'Registration', to: '/registration' },
  { label: 'Travel', to: '/travel' },
]
</script>

<template>
  <!-- == Navbar for small screens == -->

  <!-- Top Navbar -->
  <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid bg-primary">
      <a class="navbar-brand text-secondary" href="#">
        <h5>37th Magnetic Recording Conference</h5>
        <h6>August 3rd - 5th, 2026</h6>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-body">
          <div class="navbar-nav">
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

  <main class="content p-4">
    <RouterView />
  </main>

  <footer class="content p-4 mt-4 bg-primary text-secondary">
    <div class="footer-inner">
      <p>
        © Regents of the University of California, San Diego. All rights reserved. The University of
        California, San Diego is an equal opportunity educator and employer.
      </p>
    </div>
  </footer>
</template>
