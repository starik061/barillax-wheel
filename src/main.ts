import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import {
  createTonConnectUIProvider,
  TonConnectUIContext,
  TonConnectUIOptionsContext
} from 'ton-ui-vue'

// Инициализация TonConnect
const { tonConnectUI, setOptions } = createTonConnectUIProvider({
  manifestUrl: 'http://localhost:5173/tonconnect-manifest.json' // замени под себя
})

const app = createApp(App)

// Провайдим в приложение
app.provide(TonConnectUIContext, tonConnectUI)
app.provide(TonConnectUIOptionsContext, setOptions)

app.use(router)
app.use(createPinia())

app.mount('#app')
