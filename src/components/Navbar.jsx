import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css';
function Navbar() {
  return (
    <div className='navbar'>
        <h1>React Router Dom</h1>
        <div>
        <NavLink  className="link" to={"/"}> Home </NavLink>
        <NavLink className="link" to={"/about"}> About </NavLink>
        <NavLink className="link" to={"/contact"}> Contact </NavLink>
    </div>
    </div>
  )
}

export default Navbar
