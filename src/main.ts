import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from "axios";

import '@/components/inc/Bootstrap5.js'
import 'animate.css';

axios.defaults.baseURL = (window.location.host == 'localhost:5173' ? 'http://127.0.0.1:8000' : 'https://api.makeawish.today')


const app = createApp(App)

app.use(router)

app.mount('#app')
