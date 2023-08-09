import React from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import './Color.css'


function Color ({ colors }) {
    const { color } = useParams();
    const validColor = colors.filter(c => c.toLowerCase() === color.toLowerCase());
    if (!validColor.length) return <Redirect to="/colors" />

    return (
        <div className="Color" style={{backgroundColor : color }}>
            <Link to="/colors"><span>Go back to Colors Home</span></Link>
        </div>
    )
}

export default Color;

