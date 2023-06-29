let OrderM = [{
        path: 'orderlist',
        name: 'orderlist',
        component: () => import('@/views/OrderList/index'),
        meta: {
            name:'订单列表',
            breadcrumb: ['订单管理', '订单列表']
        }
    },
    {
        path: 'addorder',
        name: 'addorder',
        component: () => import('@/views/AddOrder/index'),
        meta: {
            name:'添加订单',
            breadcrumb: ['订单管理', '添加订单']
        }
    },
]
export default OrderM 