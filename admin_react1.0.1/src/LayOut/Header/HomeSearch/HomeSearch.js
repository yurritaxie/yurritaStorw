import {SearchOutlined} from '@ant-design/icons';
import { useState,useRef} from 'react';


function SearchContent(props){
    let seachItems=['umi ui','Ant Design','Pro Table','Pro Layout']
    function chooseItem(event,item){
        event.stopPropagation()
        props.sonInfo(item)
    }
    return (
        <div className='searchcontent'>
            {
            seachItems.map((item,index)=>{
               return <div onClick={(event)=>chooseItem(event,item)} key={index}>{item}</div>
            })
            }
        </div>
    )
}

function HomeSearch(){
    let inputRef=useRef()
    let [inputShow,setInputShow]=useState(false)
    let [searchContent,setSearchContent]=useState(false)
    let [inputContent,setInputContent]=useState('')

    function inputOnFoucs(){
      setInputShow(true)
      if(inputShow){
        inputRef.current.focus()
      }
    }
    function focus(){
        if(inputShow) setSearchContent(true) 
    }
    function blurs(){
        setTimeout(()=>{
            setSearchContent(false)
            setInputShow(false) 
        },1000)
    }
    function sonInfo(value){
        setInputContent(value)
    }

    return (
        <div className="homesearch" onClick={()=>inputOnFoucs()}>
            <SearchOutlined/>
            <input 
                ref={inputRef} 
                className={inputShow?'inputShow':'input'} 
                onFocus={()=>focus()} 
                onBlur={()=>blurs()}
                defaultValue={inputContent} 
                placeholder='umi ui'
            />
            {searchContent?<SearchContent inputShow={inputShow} sonInfo={sonInfo}/>:''}
        </div>
    )
}

export default HomeSearch