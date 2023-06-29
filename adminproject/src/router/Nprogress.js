import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function useuseNProgress(){
    //对路由加载进度条进行配置，安装gite上的文件进行配置就可以
    NProgress.configure({
        easing: 'ease', //动画的方式
        speed:500,//速度条
        showSpinner:false,//加载icon
        trickleSpeed: 200,//增量
        minimum:0.3//最小百分比
    })
    return NProgress
}