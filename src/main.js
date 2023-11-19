import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import BaseComponents from './components/UI'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

BaseComponents.forEach(cmp => app.component(cmp.name, cmp))

app.mount('#app')
