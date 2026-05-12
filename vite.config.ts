import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), vueDevTools()],
  server: {
    allowedHosts: ['tmrc2026.menalab.site', 'test_tmrc2026.menalab.site'],
  },
  preview: {
    allowedHosts: ['tmrc2026.menalab.site', 'test_tmrc2026.menalab.site'],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
