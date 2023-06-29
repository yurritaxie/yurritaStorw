let VipMemeberM = [{
    path: 'vipsearch',
    name: 'vipsearch',
    component: () => import('@/views/VipMember/VipSearch/index'),
    meta: {
        name:'会员查询',
        breadcrumb: ['会员管理', '会员查询']
    }
},
{
    path: 'vipclass',
    name: 'vipclass',
    component: () => import('@/views/VipMember/VipClass/index'),
    meta: {
        name:'会员等级',
        breadcrumb: ['会员管理', '会员等级']
    }
},
]
export default VipMemeberM