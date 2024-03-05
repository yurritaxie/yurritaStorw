import { Navigate, Route,Routes} from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from '../pages/Login/index'
import LayOut from '../LayOut/index'
import routeItemNavList from '../units/useRouteItems'
import combineData from '../units/useCombineData'



let a = false

let routes=[
    {
      path:'/',
      token:true,
      element:<LayOut></LayOut>,
    //   children:[
    //     {
    //         path:'/home',
    //         token:true,
    //         element:<Home></Home>,
    //     }
    //   ]
    },
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'*',
        element:<div>404</div>
    }
]

//创建单个路由组件
function ItemRoute(list,isToken){
     if(isToken){
        a = true
     }
    return (
        list.map((item,index)=>{
           return <Route path={item.path} element={item.token&&!a?<Navigate to='/login'></Navigate>:item.element} key={index}>
              {item.children?ItemRoute(item.children):''}
           </Route>
        })
    )
}

//创建路由表

function AddRouteList(){
    let isToken= useSelector(state=>{ 
        return  state.navListReducer.token
    })
    let navlist= useSelector(state=>{
        if(state.navListReducer.navList && state.navListReducer.navList>0){
            return state.navListReducer.navList
        }else{
            return state.navListReducer.navList.payload || false
        }
    })
    if(navlist){
        routes[0].children=combineData(routeItemNavList(navlist))
    }
    return <Routes>
        {ItemRoute(routes,isToken)}
    </Routes>
}

export default AddRouteList