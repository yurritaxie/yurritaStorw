import serive from "../index";
export function LoginPost(url,data={}){
    return new Promise((resolve, reject) => {
        serive.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

export function NavListPost(url,data={}){
    return new Promise((resolve, reject) => {
        serive.post(url,data).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}