import React from 'react';
import './Nav.css'
import { NavLink, BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Nav ({ dogs }) {
    return (
        <nav className="Nav">

            {dogs.map(dog => 
                <NavLink exact to={`/dogs/${dog}`}>
                    {dog}
                </NavLink>
            )}

            <NavLink exact to='/dogs'>All dogs</NavLink>    

        </nav>
    )
}

export default Nav;