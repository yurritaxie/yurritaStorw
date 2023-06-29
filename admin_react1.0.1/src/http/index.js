import axios from "axios";

//创建axios实例
let service=axios.create({
    baseURL:'https://fastmock.site/mock/b7a4b9feeb3373e0d6a64795454eac01/adminreact',
    timeout:6000
})

//创建请求拦截和响应拦截
service.interceptors.request.use(
    config=>{
        if(sessionStorage.getItem('token')){
            config.headers['token'] = sessionStorage.getItem('token')
        }
        return config
    },
    err=>{
        return Promise.inject(err)
    }  
)

service.interceptors.response.use(
    response=>{
        return response
    },
    err=>{
        return Promise.inject(err)
    }
)

export default service