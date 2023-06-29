import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {UserOutlined,LogoutOutlined,SettingOutlined} from '@ant-design/icons';
import {message} from 'antd';
function PersonBox(){
    let navigate=useNavigate()
    let myPersonList=[
        {name:'个人中心',icon:<UserOutlined/>,path:'/'},
        {name:'个人设置',icon:<SettingOutlined />,path:'/'},
        {name:'退出登录',icon:<LogoutOutlined />,path:'/login'}
    ]
    function chooseItem(index){
        navigate(myPersonList[index].path,{replace:true})
        if(index===2){
            sessionStorage.removeItem('token')
            message.success('退出登录成功');
        } 
    }
    return(
        <div className="PersonBox">
           {myPersonList.map((item,index)=>{
             return (<div className="personalItem" onClick={()=>chooseItem(index)} key={index}> 
                {item.icon}
                <span>{item.name}</span>
             </div>)
           })}
        </div>
    )
}



function Personality(){
    let [personShow,setPersonShow]=useState(false)
    function mouseover(){
        setPersonShow(true)
    }
    function mouseout(){
        setPersonShow(false)
    }
    return(
        <div className="personal" onMouseOver={()=>mouseover()} onMouseOut={()=>mouseout()}>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F24628728-277e85e912d46d58.gif&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666804234&t=621fd6409221ff3d84d202f97834a90e" alt=""></img>
            <div>Yurrita Xie</div>
            {personShow?<PersonBox/>:''}
        </div>
    )
}

export default Personality