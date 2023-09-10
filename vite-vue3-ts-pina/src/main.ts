import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/style/common.css'
import ElementPlus from 'element-plus'
import print from 'vue3-print-nb'
// 引入路由守卫
import './router/defend';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(print)

