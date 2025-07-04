import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/barillax-wheel/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true, // Разрешает доступ с внешних устройств
    port: 5173, // Или ваш порт
    allowedHosts: ['.ngrok-free.app', 'violation-twins-horse-empire.trycloudflare.com'] // Разрешаем все ngrok-домены
  }
})
