import './index.scss'
import Header from './Header'
import NavList from './NavList'
import { Outlet } from 'react-router-dom'
function LayOut(){
    return (
        <div id="layout">
            <Header></Header>
            <div className="main">
                <NavList></NavList>
                <div className="right">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default LayOut