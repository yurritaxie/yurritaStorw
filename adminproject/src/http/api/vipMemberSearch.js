import serive from "../index";

export function vipMemberSearch(url,params={}){
    return new Promise((resolve, reject) => {
        serive.get(url,{params}).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}