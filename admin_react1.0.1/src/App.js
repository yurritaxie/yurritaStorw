
import './App.css';
import {useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react';
import AddRouteList from './routes/index'
import Loading from './pages/Loading/index'


function App() {
//获取当前路由
// let location=useLocation()
//控制路由跳转
// let navigate=useNavigate()
// useEffect(()=>{
//   routeDefence()
// })

//路由重定向
// function redirectRoutes(){
 
//   if(location.pathname==='/'){
//     console.log('重定向');
//   }
// }
//路由守卫
// function routeDefence(){
//   if(location.pathname!=='/login'){
//     if(sessionStorage.getItem('token')){

//     }else{
//       navigate('/login',{replace:true})
//     }
//   }
// }


//创建路由表

  return (
    <React.Suspense fallback={<Loading></Loading>}>
      <div id="App">
        <AddRouteList></AddRouteList>
      </div>
    </React.Suspense>
  );
}

export default App;
