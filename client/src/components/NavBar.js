import React from "react";
import { NavLink } from "react-router-dom";
import YesChef from "./Yes Chef.png"

function NavBar({ user }) {
  return (
    <>
     
        {user ? (
           <div className="nav">
          {/* <div className="profile_container"> */}
            <img className="logo" src={YesChef} alt="YesChef"/>
            <NavLink className="navlink" to="/ingredients">
              Ingredients
            </NavLink>
             <NavLink className="navlink" to="/orderform">
                Order Form
              </NavLink>
            <NavLink className="navlink" to="/logout">
              Logout
            </NavLink>
            <div>
             
               <NavLink className="navlink" to={'/profile'}>
              <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}/>
             
            </NavLink>
              
            </div>
            
          </div>
         
        ) : (
          <div> </div>
          
        )}
        {/* </div> */}
      
     
     
    </>
  );
}

export default NavBar;
