import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <NavLink className="nav_login" exact to="/Login">
        Login / Signup
      </NavLink>
      <NavLink className="nav_element" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav_element" exact to="/AlbumPicker">
        Album Picker
      </NavLink>
      <NavLink className="nav_element" exact to="/YourFavs">
        Your Albums
      </NavLink>
      <NavLink className="nav_element" exact to="/Discover">
        Discover
      </NavLink>
    </div>
  );
}

export default Nav;
