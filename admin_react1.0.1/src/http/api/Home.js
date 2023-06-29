import service from "../index";

export function NoticeGet(url,params={}){
    return new Promise((resolve,reject)=>{
        service.get(url,{params}).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
