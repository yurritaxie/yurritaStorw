import {BellOutlined} from '@ant-design/icons';
import { useEffect, useState} from 'react';
import {NoticeGet} from '../../../http/api/Home'
import './index.scss'
import NoticeBox from './NoticeBox/NoticeBox';




function HeadNotice(){
    let [noticeShow,setNoticeShow]=useState(false)
    let [noticeList,setNoitceList]=useState([])
    let [noticeNums,setNoticeNums]=useState(11)
    useEffect(()=>{
        NoticeGet('/noticenews').then(res=>{
            setNoitceList((state)=>{
                return [
                    ...res.noticeList
                ]
            })
        })
    },[])
    function noticeOut(){
        setNoticeShow(noticeShow=>!noticeShow)
    }
    function numsTotal(num){
        setNoticeNums(num)
    }
    return (
        <div className='bellOut' >
            <BellOutlined onClick={()=>noticeOut()}/>
            {noticeNums?<div className='notice' onClick={()=>noticeOut()}>{noticeNums}</div>:null}
            <div id='special' className={noticeShow?'noticeShow':'normal'}>
                {noticeShow?<NoticeBox noticeList={noticeList} numsTotal={numsTotal}/>:''}
            </div>
        </div>
    )
}

export default HeadNotice