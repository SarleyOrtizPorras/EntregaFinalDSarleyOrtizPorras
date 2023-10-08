import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'>PlusPhone</NavLink>
                </div>
                <ul>
                    <li>
                        <NavLink className="nav_link" to='/categoria/Iphone'>Iphone</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/Samsung'>Samsung</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/Nokia'>Nokia</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar