import React from 'react';
import './Nav.css'
import { NavLink, BrowserRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Nav ({ dogs }) {
    return (
        <nav className="Nav">

            {dogs.map(dog => 
                <NavLink key={uuid()} exact to={`/dogs/${dog}`}>
                    {dog}
                </NavLink>
            )}

            <NavLink exact to='/dogs'>All dogs</NavLink>    

        </nav>
    )
}

export default Nav;