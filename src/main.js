import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
