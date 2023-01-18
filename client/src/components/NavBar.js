import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  return (
    <>
      <div className="nav-background">
        {user ? (
          <div className="profile_container">
            <NavLink to={'/profile'}>
              <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}/>
            
            </NavLink>
            <NavLink className="logout-button" to="/logout">
              Logout
            </NavLink>
            <div>
              <NavLink className="order-form-link" to="/orderform">
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
