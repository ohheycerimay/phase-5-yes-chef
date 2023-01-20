import React from "react";
import { NavLink } from "react-router-dom";
import YesChef from "./Yes Chef.png"

function NavBar({ user }) {
  return (
    <>
      <div className="nav">
        <img className="logo" src={YesChef} alt="YesChef"/>
      {/* <header>Yes Chef!</header> */}
        {user ? (
          
          <div className="profile_container">
            <NavLink className="navlink" to={'/profile'}>
              <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}/>
            
            </NavLink>
            <NavLink className="navlink" to="/logout">
              Logout
            </NavLink>
            <div>
              <NavLink className="navlink" to="/orderform">
                Order Form
              </NavLink>
            </div>
            
          </div>
        ) : (
          <div></div>
        )}
      </div>
      
    </>
  );
}

export default NavBar;
