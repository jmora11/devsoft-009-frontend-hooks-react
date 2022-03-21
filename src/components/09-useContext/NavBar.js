import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <Link className='navbar-brand' to='/'>Hank App</Link>
                <NavLink end to="/" className={({ isActive }) => "nav-item nav-link " + (isActive ? " activated" : "")} >Home</NavLink>
                <NavLink end to="/about" className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")} >About</NavLink>     
                <NavLink end to="/login" className={({ isActive }) => "nav-item nav-link" + (isActive ? " activated" : "")} >Login</NavLink>
        </div>
    )
}
