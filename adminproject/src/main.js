import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.scss'
import './style/iconfont.css'
import { componentMount } from './components/index'

//主题变化样式，可以进行修改，有时间自己修好看一点
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入路由守卫
import './router/defend'
//动态验证
import MakeitCaptcha from 'makeit-captcha' //引入组件
import 'makeit-captcha/dist/captcha.min.css'//引入样式
//添加icon图标
//import * as 导入全部模块
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

let app = createApp(App)
componentMount(app)
app.use(store)
app.use(router)
app.use(MakeitCaptcha)
app.mount('#app')

// 全局注册el-icon
//Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
