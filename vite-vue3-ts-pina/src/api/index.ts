//引入axios
import axios from 'axios'

//创建axios实例
let serive=axios.create({
    baseURL:'https://fastmock.site/mock/d45fe0ae701ad0b7529d39d0a0fa75e3/vue3',
    timeout:6000
})

function getToken(){
    if(sessionStorage.getItem("token")){
        return sessionStorage.getItem("token")
    }else{
        return false
    }
}

//创建请求拦截
serive.interceptors.request.use(
    config=>{
        //成功拦截
        if(getToken()){
            config.headers["token"]=getToken()
        }
        return config
    },
    err=>{
        return Promise.reject(err)
    }
)
//创建响应拦截
serive.interceptors.response.use(
    response=>{//响应成功
        return response
    },
    err=>{//失败
        return Promise.reject(err)
    }
)

export default serive