let RouteCircleM = [{
        path: 'routebyrouteone',
        name: 'routebyroute',
        component: () => import('@/views/RouteByRoute/index'),
        meta: {
            name:'嵌套路由1',
            breadcrumb: ['嵌套路由', '嵌套路由1']
        }
    },
    {
        path: 'routebyroutetwo-one',
        name: 'routebyroutetwo-one',
        component: () => import('@/views/RouteByRoute/index2-1'),
        meta: {
            name:'嵌套路由2-1',
            breadcrumb: ['嵌套路由', '嵌套路由2', '嵌套路由2-1']
        },
    },
]
export default RouteCircleM