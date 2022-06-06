import React from "react";
import Logo from "./Logo";
import './Style.css';
import { NavLink } from "react-router-dom";

const NaviBar = () => {
    return(
        <ul className="navbar">
        <li className="navbarLogo"><Logo/></li>
        <li className="navbarList"><NavLink to = '/'>Package</NavLink></li>
        <li className="navbarList"><NavLink to = '/profile'>Profile</NavLink></li>
        <li className="navbarList">Notification</li>
        </ul>
    )
}

export default NaviBar;