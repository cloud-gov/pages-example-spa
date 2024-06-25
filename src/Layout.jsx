import React, {Component} from 'react'
import { NavLink, Outlet } from "react-router-dom";

const path = import.meta.env.BASE_URL + '/'

class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    {/* All nav links need to go to {path} */}
                    <li><NavLink to={path}>Home</NavLink></li>
                    <li><NavLink to={path + "stuff"}>Stuff</NavLink></li>
                    <li><NavLink to={path + "contact"}>Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default Layout;