import React from 'react';
import './ColorsNav.css'
import { NavLink } from 'react-router-dom';
// import { v4 as uuid } from 'uuid';

function ColorsNav () {
    return (
        <nav className="ColorsNav">
            <h2>Welcome to the color factory!</h2>
            <NavLink exact to="/colors/new">
                Add new color
            </NavLink>
        </nav>
    )
}

export default ColorsNav;