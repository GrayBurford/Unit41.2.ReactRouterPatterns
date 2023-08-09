import React from 'react';
import './ColorsHome.css';
import { Link } from 'react-router-dom';
import ColorsNav from './ColorsNav';
import { v4 as uuid } from 'uuid';

function ColorsHome ({ colors }) {
    // const INITIAL_STATE = ['Red', 'Green', 'Blue', 'Purple'];
    // const [colors, setColors] = useState(INITIAL_STATE)

    // function addColor (newColor) {
    //     setColors([...colors, newColor])
    // }

    return (
        <div className='ColorsHome'>
            <ColorsNav />
            <h3>Please select an existing color:</h3>
            <ul>
                {colors.reverse().map(color => 
                    <Link key={uuid()} to={`/colors/${color}`}>
                        <li style={{backgroundColor : color }}>
                            {color.toUpperCase()}
                        </li>
                    </Link>  
                )}
            </ul>
        </div>
    )
}

export default ColorsHome;
