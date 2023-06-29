import './index.scss'
import {DashboardOutlined,FormOutlined,TableOutlined,RobotOutlined,CheckCircleOutlined,WarningOutlined,UserOutlined,HighlightOutlined,MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {changeNavList} from '../../store/reducers/navListReducer'
import {useNavigate} from 'react-router-dom'

  
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
 

function NavList(){
//定义导航栏数据
let [navLists,setNavLists]=useState([])
let dispatch=useDispatch()
let navigate=useNavigate()
//挂载完成，从后端获取数据
useEffect(()=>{
  let lists= [
    {
      icon: <DashboardOutlined/>,
      id: 1,
      title: "Dashboard",
      url: "/Dashboard",
      children: [
        {
          icon: "",
          title: "分析",
          url: "/dashboard/fenxi",
          id:"/dashboard/fenxi",
          com:'Analyse'
        },
        {
          icon: "",
          title: "监控",
          url: "/dashboard/jiankong",
          id:'/dashboard/jiankong',
          com:'Watch'
        },
        {
          icon: "",
          title: "工作台",
          url: "/dashboard/gongzuo",
          id: "/dashboard/gongzuo",
          com:'WorkTable'
        },
      ],
    },
    {
      icon: <FormOutlined/>,
      id: 2,
      title: "表单页",
      url: "/form",
      children: [
        {
          icon: "",
          title: "基础表单",
          url: "/form/jichu",
          id:"/form/jichu",
          com:'BasicForm'
        },
        {
          icon: "",
          title: "分步表单",
          url: "/form/fenbu",
          id:"/form/fenbu",
          com:'StepForm'
        },
        {
          icon: "",
          title: "高级表单",
          url: "/dashboard/gaoji",
          id:"/dashboard/gaoji",
          com:'SeniorForm'
        },
      ],
    },
    {
      icon: <TableOutlined />,
      id: 3,
      title: "列表页",
      url: "/table",
      children: [
        {
          icon: "",
          title: "搜索列表",
          url: "/table/sousuo",
          id:"/table/sousuo",
          children: [
            {
              icon: "",
              title: "文章",
              url: "/table/sousuo/wenzhang",
              id:"/table/sousuo/wenzhang",
              com:'Article'
            },
            {
              icon: "",
              title: "项目",
              url: "/table/sousuo/xiangmu",
              id:19,
              com:'Project'
            },
            {
              icon: "",
              title: "应用",
              url: "/table/sousuo/yingyong",
              id:"/table/sousuo/yingyong",
              com:'Apply'
            },
          ],
        },
        {
          icon: "",
          title: "查询表格",
          url: "/table/chaxun",
          id:"/table/chaxun",
          com:'EnquiryForm'
        },
        {
          icon: "",
          title: "标准列表",
          url: "/table/biaozhun",
          id:"/table/biaozhun",
          com:'StandardList'
        },
        {
          icon: "",
          title: "卡片列表",
          url: "/table/card",
          id:"/table/card",
          com:'CardList'
        },
      ],
    },
    {
      icon: <RobotOutlined />,
      id: 4,
      title: "详情页",
      url: "/xiangqing",
      children: [
        {
          icon: "",
          title: "基础详情页",
          url: "/xiangqing/jichuxiangqing",
          id:"/xiangqing/jichuxiangqing",
          com:'BasicDetail'
        },
        {
          icon: "",
          title: "高级详情页",
          url: "/xiangqing/gaojixiangqingye",
          id:"/xiangqing/gaojixiangqingye",
          com:'SeniorDetail'
        },
      ],
    },
    {
      icon: <CheckCircleOutlined />,
      id: 5,
      title: "结果页",
      url: "/jieguo",
      children: [
        {
          icon: "",
          title: "成功页",
          url: "/jieguo/success",
          id:"/jieguo/success",
          com:'SuccessPage'
        },
        {
          icon: "",
          title: "失败页",
          url: "/jieguo/err",
          id:"/jieguo/err",
          com:'FailPage'
        },
      ],
    },
    {
      icon: <WarningOutlined />,
      id: 6,
      title: "异常页",
      url: "/abnormal",
      children: [
        {
          icon: "",
          title: "403",
          url: "/abnormal/403",
          id: "/abnormal/403",
          com:'Abnormal403'
        },
        {
          icon: "",
          title: "404",
          url: "/abnormal/404",
          id:"/abnormal/404",
          com:'Abnormal404'
        },
        {
          icon: "",
          title: "500",
          url: "/abnormal/500",
          id:"/abnormal/500",
          com:'Abnormal500'
        },
      ],
    },
    {
      icon: <UserOutlined />,
      id: 7,
      title: "个人页",
      url: "/personage",
      children: [
        {
          icon: "",
          title: "个人中心",
          url: "/personage/usercenter",
          id: "/personage/usercenter",
          com:'PersonalCenter'
        },
        {
          icon: "",
          title: "个人设置",
          url: "/personage/userset",
          id:"/personage/userset",
          com:'PersonalSet'
        },
      ],
    },
    {
      icon: <HighlightOutlined />,
      id: "/graph",
      title: "图形编辑器",
      url: "/graph",
      com:'HighlightOutlined'
    },
  ];
  let datas=getLists(lists)
  setNavLists(datas)
  //处理数据
  let listInStore=lists.filter((item)=>{
    return delete(item.icon)
  })
  dispatch(changeNavList(listInStore))
  
},[])

function getLists(lists,arr=[]){
  for(let i=0;i<lists.length;i++){
    if(lists[i].children && lists[i].children.length>0){
      arr[i] = getItem(lists[i].title, lists[i].id,lists[i].icon)
      arr[i].children = getLists(lists[i].children)
    }else{
      arr.push(getItem(lists[i].title, lists[i].id,lists[i].icon))
    }
  }
  return arr
}
//路由跳转
function getToPath(e){
  console.log(e.key);
  navigate(e.key)
}

const [collapsed, setCollapsed] = useState(false);
const toggleCollapsed = () => {
  setCollapsed(!collapsed);
}
return (
  <div className='left'>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      inlineCollapsed={collapsed}
      items={navLists}
      onClick={(e)=>{
        getToPath(e)
      }}
    />
    <div className='collapse'
      onClick={toggleCollapsed}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  </div>
)
};
  
  export default NavList;