
//封装登录页面请求
import service from "../index";

export function Loginpost(url,data={}){
    return new Promise((resolve,reject)=>{
        service.post(url,data).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}

