<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Offcanvas } from 'bootstrap'
import { RouterLink } from 'vue-router'
import type { NavLink, NavLinks, SimpleNavLink } from '@/stores/NavLinks'

const props = defineProps({
  navLinks: {
    type: Array as () => NavLinks,
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
let mycanvas: HTMLElement | null = null
let mql: MediaQueryList | null = null
const onMqlChange = (e: MediaQueryListEvent) => {
  isxxl.value = e.matches
}

const collapseId = (link: NavLink, index: number) => {
  if ('group' in link) {
    return link._id ?? `nav-group-${index}`
  }

  return link._id ?? `nav-link-${index}`
}

const navItems = computed(() =>
  props.navLinks.map((link, index) => ({
    collapseId: collapseId(link, index),
    link,
  })),
)

const isSimpleNavLink = (link: NavLink): link is SimpleNavLink => 'to' in link


const closeOffcanvas = () => {
  if (isxxl.value || !mycanvas) return

  const offcanvas =
    Offcanvas.getInstance(mycanvas) ?? new Offcanvas(mycanvas)

  offcanvas.hide()

  // Without it the offcanvas backdrop remains and prevents interaction with the page until the transition ends
  setTimeout(() => {
    document.querySelectorAll('.offcanvas-backdrop').forEach(el => el.remove())
  }, 300)
}



onMounted(() => {
  mql = window.matchMedia('(min-width: 1400px)')
  isxxl.value = mql.matches
  mql.addEventListener('change', onMqlChange)

  mycanvas= document.getElementById('offcanvasNavbar')
  mycanvas?.addEventListener('hidden.bs.offcanvas', () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    if (!offcanvasElement) {
      return
    }
  })
})

onBeforeUnmount(() => {
  mql?.removeEventListener('change', onMqlChange)
  mycanvas?.removeEventListener('hidden.bs.offcanvas', () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    if (!offcanvasElement) {
      return
    }
  })
})



const link = computed(() => {
  if (isxxl.value) {
    return '#'
  } else {
    return '/'
  }
})
</script>

<template>
  <nav class="navbar sticky-top navbar-expand-xxl bg-primary align-items-xxl-start">
    <div class="container-fluid flex-xxl-column align-items-xxl-start" :class="{ 'vh-100': isxxl }">
      <a class="navbar-brand text-secondary flex-xxl-column align-items-xxl-start"
      :href="link">
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
        class="offcanvas bg-primary offcanvas-start offcanvas-xxl"
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
          <div class="navbar-nav flex-xxl-column w-100">
            <div v-for="item in navItems" :key="item.collapseId">
              <RouterLink
                v-if="isSimpleNavLink(item.link)"
                class="nav-link text-light"
                  :to="item.link.to"
                  @click="closeOffcanvas"
              >
                {{ item.link.label }}
              </RouterLink>

              <details v-else class="nav-group">
                <summary
                  class="nav-link nav-group-chevron text-light w-100 text-start d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${item.collapseId}`"
                  :aria-controls="item.collapseId"
                  aria-expanded="false"
                >
                  {{ item.link.group }}
                </summary>
                <ul>
                  <li  v-for="groupLink in item.link.links"
                      :key="groupLink._id ?? `${item.collapseId}-${groupLink.label}`">
                    <RouterLink
                      class="nav-link text-light ps-4"
                      :to="groupLink.to"
                       @click="closeOffcanvas"
                    >
                      {{ groupLink.label }}
                    </RouterLink>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-group-toggle {
  background: transparent;
  border: 0;
}

.nav-group-toggle:hover,
.nav-group-toggle:focus-visible {
  text-decoration: underline;
}

.nav-group-chevron {
  width: 1rem;
  text-align: center;
  opacity: 0.75;
  text-decoration: none;
}


.nav-group-links {
  margin-bottom: 0.5rem;
}

details .nav-group-chevron::after {
  content: '>';
  display: inline-block;
  transition: transform 0.2s ease-in-out;

}
details[open] .nav-group-chevron::after {
  transform: rotate(90deg);
}

details ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0.5rem;
}
</style>
