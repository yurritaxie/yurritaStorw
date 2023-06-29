import router from "./index"
import useuseNProgress from './Nprogress'
import store from '@/store/index'
let NProgress=useuseNProgress()

router.beforeEach((to,from,next)=>{
    // console.log('打印的是to',to)
    NProgress.start();
    if(to.name=="login"){
        next()
    }else{
        if(sessionStorage.getItem('token')){
            // next()
            if(!store.state.isRefresh){
                //如果页面重新刷新辣，需要重新添加动态路由
                store.dispatch('aynAddRoute').then(()=>{
                    router.push(to.fullPath)
                })
            }else{
                next()
            }
        }else{
            next({name:'login'})
        }
    }
})

//后置路由守卫 after=》路由结束监听的
router.afterEach((to,from)=>{
    NProgress.done()
})