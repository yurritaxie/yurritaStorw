
import {useState} from 'react'
function NoticeBox(props){
    let {noticeList}=props
    let numsTotal=0
    //得到未读的消息条数
    function getNum(){
      return noticeList.forEach(element => {
            let arr=element.news.filter((item)=>{
                return item.isReaded===false
            })
            element.nums=arr.length
            numsTotal+=element.nums
        })
    }
    getNum()
    //获取每个通知列表
    let [activeStyle,setActiveStyle]=useState(0)
    let [centerList,setCenterList]=useState(noticeList[0].news)
    function changeNoticeTitle(index){
        setActiveStyle(index)
        setCenterList((centerList)=>{
            return [
                ...noticeList[index].news
            ]
        })
    }
    //已读样式变化
    function readed(Lists,index){
        props.numsTotal(numsTotal-1)
        let arr=[...Lists]
        arr[index].isReaded=true
        setCenterList((centerList)=>{
            return [
                ...arr
            ]
        })
        getNum() 
    }

    //真实dom为
    function realList(){
        if(activeStyle===0){
            return noticeVitualDom(centerList)
          }else if(activeStyle===1){
           return messageVitualDom(centerList)
          }else if(activeStyle===2){
            return backlog(centerList)
          }
    }
    //底部
    function bottomList(){
        if(activeStyle===0){
            return <div className='bottom'>
                <span>清空 通知</span>
                <span>查看更多</span>
            </div>
          }else if(activeStyle===1){
           return <div className='bottom'>
                <span>清空 消息</span>
                <span>查看更多</span>
            </div>
          }else if(activeStyle===2){
            return <div className='bottom'>
            <span>清空 代办</span>
            <span>查看更多</span>
           </div>
          }
    }
    //通知内容列表，虚拟dom形成
    function noticeVitualDom(Lists){
      return Lists.map((item,index)=>{
            if(item.isReaded){
                return (<div className='box' key={index} style={{opacity:0.5}} onClick={()=>readed(Lists,index)}>
                        <img src={item.img} alt=''></img>
                        <div>
                            <span>{item.content}</span>
                            <span className='time'>{item.time}</span>
                        </div>
                    </div>
                    )
                    
            }else{
                return <div className='box' key={index} onClick={()=>readed(Lists,index)}>
                        <img src={item.img} alt=''></img>
                        <div>
                            <span>{item.content}</span>
                            <span className='time'>{item.time}</span>
                        </div>
                    </div>
            }
         }) 
    }
    //消息内容列表，虚拟dom形成
    function messageVitualDom(Lists){
        return Lists.map((item,index)=>{
            if(item.isReaded){
                return <div id="box1" className='box' key={index} style={{opacity:0.5}} onClick={()=>readed(Lists,index)}>
                        <img src={item.img} alt=''></img>
                        <div>
                            <span>{item.content}</span>
                            <span className='time'>{item.message}</span>   
                            <span className='time'>{item.time}</span>
                        </div>
                    </div>
            }else{
                return <div className='box'id="box1" key={index} onClick={()=>readed(Lists,index)}>
                        <img src={item.img} alt=''></img>
                        <div>
                            <span>{item.content}</span>
                            <span className='time'>{item.message}</span> 
                            <span className='time'>{item.time}</span>
                        </div>
                    </div>
            }
         }) 
    }
    //代办内容列表，虚拟dom形成
    function backlog(Lists){
        return Lists.map((item,index)=>{
            if(item.isReaded){
                return <div className='backlog' key={index} style={{opacity:0.5}} onClick={()=>readed(Lists,index)}>
                        <div className='backlogTitle'>
                            <span>{item.taskname}</span>
                            <span className={'state'+index}>{item.state}</span>
                        </div>
                        <div className='backlogContent'>{item.content}</div>
                    </div>
            }else{
                return <div className='backlog' key={index} onClick={()=>readed(Lists,index)}>
                        <div className='backlogTitle'>
                            <span>{item.taskname}</span>
                            <span className={'state'+index}>{item.state}</span>
                        </div>
                        <div className='backlogContent'>{item.content}</div>
                    </div>
            }
        })
    }
    return(
        <div className='NoticeBox'>
            <div className='top'>
                {
                    noticeList.map((item,index)=>{
                        return <div className={activeStyle===index?'active':''} key={index} onClick={()=>changeNoticeTitle(index)}>{item.title}
                        {item.nums?<span>（{item.nums}）</span>:''}</div>
                    })
                }
            </div>
            <div className='center'>
               {realList()}
            </div>
            {bottomList()}
        </div>
    )
}

export default NoticeBox