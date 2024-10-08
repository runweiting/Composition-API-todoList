import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// vee-validate
import { configure } from 'vee-validate'
configure({
  validateOnInput: true
})

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
