import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom' 
function navbar() {
return(
    <div className='navbar'>
<ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/About"> About</NavLink></li>
    <li><NavLink to="/Contact">Contact</NavLink></li>
    <li><NavLink to="/Blog">Blog</NavLink></li>
</ul>
    </div>
)
}
export default navbar