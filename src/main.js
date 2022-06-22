import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/tailwind.css'
import store from './store'

createApp(App).use(store).use(store).use(router).mount('#app')
