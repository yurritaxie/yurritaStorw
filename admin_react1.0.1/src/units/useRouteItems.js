let arr=[]
function routeItemNavList(navList){
    navList.forEach(item => {
        if(item.children && item.children.length>0){
            routeItemNavList(item.children)
        }else{
            arr.push(item)
        }
    })
    return arr
}
export default routeItemNavList

