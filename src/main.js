import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import pinia from './plugins/pinia.js'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(pinia)
app.mount('#app')
