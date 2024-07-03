import React, {Component} from 'react'
import { NavLink, Outlet } from "react-router-dom";


class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to="stuff">Stuff</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default Layout;