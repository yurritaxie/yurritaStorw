import HomeSearch from "./HomeSearch/HomeSearch"
import {QuestionCircleOutlined} from '@ant-design/icons';

import './index.scss'
import Personality from "./Personality/Personality";
import HeadNotice from "./HeadNotice";

function Header(){
    return (
        <div className="header">
            <div className="left">
                <img src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' alt=''></img>
                <span>Ant Design Pro</span>
            </div>
            <div className="right">
                <HomeSearch></HomeSearch>
                <div className="question"><QuestionCircleOutlined/></div>
                <HeadNotice></HeadNotice>
                <Personality></Personality>
            </div>
        </div>
    )
}
export default Header