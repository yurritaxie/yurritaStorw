import React from "react"

//异步加载路由
function aynRouteCreate(name){
    let Combine=React.lazy(()=>import(`../pages/${name}/index`))
    return <Combine></Combine>
}

let routeList=[]
function combineData(list){
    list.map((item)=>{
        return routeList.push({
            path:item.url,
            token:true,
            element:aynRouteCreate(item.com),
        })
    })
    return routeList
}
export default combineData