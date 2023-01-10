import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar({user}) {
  
  return (
    <>
      <div>
        {user ? (
            <div className = 'profile_container'>
            <img className = 'profile_pic' src={user.profile_pic} alt={user.username} /> 
            <h4 className='profile_greeting'>{user.username}</h4>
            </div>
        ): (
            <div></div>)}
        </div>
        <NavLink className="order-form-button" to="/orderform">Order Form</NavLink>
        <NavLink className="logout-button" to="/logout">Logout</NavLink>
    </>
    )
}

export default NavBar;