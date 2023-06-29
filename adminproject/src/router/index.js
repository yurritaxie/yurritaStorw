import { createRouter, createWebHistory } from 'vue-router'
//createRouter创建路由实例对象的
//createWebHistory 采用history方式
import Home from '../views/Home/index'
// import OrderM from './routeModule/OrderM.js'
// import RouteCircleM from './routeModule/RouteCircleM'
// import VipMemeberM from './routeModule/VipMember'

const routes = [//创建路由表
  {
    path: '/',
    name: 'layout',
    redirect:'/home',
    component:()=>import('../layout/index'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta:{breadcrumb:['首页']}
      },
      // {
        // path: '/document',
        // name: 'document',
        // component:()=>import('../views/Document/index'),
        // meta:{breadcrumb:['文档']}
      // },
      // ...OrderM
      // ,
      // ...RouteCircleM
      // ,
      // ...VipMemeberM
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login/aynComponent.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component:()=>import('@/views/NotFound/index')
  }
]
//创建路由实例对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
