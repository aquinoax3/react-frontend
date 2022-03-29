
import React from "react";
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <div className="nav">
            <NavLink className="nav_login" to="/Login">Login / Signup</NavLink>
            <NavLink className="nav_element" exact to="/">Home</NavLink>
            <NavLink className="nav_element" to="/Page1">Your Favourite Albums</NavLink>
        
        </div>
    );
}

export default Nav;