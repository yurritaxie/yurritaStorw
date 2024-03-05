import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: ()=>import('../layout/index.vue'),
        meta:{breadcrumb:['首页']},
        children:[
            {
              path: '/home',
              name: 'home',
              component: () => import('@/pages/Home/index.vue'),
              meta:{breadcrumb:['首页']}
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/pages/Login/index.vue')
    },
    // {
    //     path: '/',
    //     name: 'Index',
    //     meta: {
    //         title: '首页',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/Home/index.vue')
    // },
    {
        path: '/threejs',
        name: 'threejs',
        meta: {
            title: '3D',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/ThreeJs/index.vue')
    },
    // {
    //     path: '/sendMessage',
    //     name: 'sendMessage',
    //     meta: {
    //         title: '组件传值',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/sendMessage/index.vue')
    // },
    // {
    //     path: '/markdown',
    //     name: 'markdown',
    //     meta: {
    //         title: '组件传值',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/markdown/index.vue')
    // },
    // {
    //     path: '/print',
    //     name: 'print',
    //     meta: {
    //         title: '打印',
    //         keepAlive: true,
    //         requireAuth: true
    //     },
    //     component: () => import('@/pages/print/index.vue')
    // },
    {
        path: '/example',
        name: 'example',
        meta: {
            title: '打印',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/pages/example/index.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;