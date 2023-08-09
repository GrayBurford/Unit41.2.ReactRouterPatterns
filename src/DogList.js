import React from 'react';
import Dog from './Dog';
import './DogList.css';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function DogList ({ dogs }) {

    const cards = dogs.map(dog =>
        <div key={uuid()}>
            <h3>{`Hi, I'm ${dog.name}!`}</h3>
            <div>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>             
            </div>
            <img 
                src={dog.src}
                alt={`This is ${dog.name}'s picture`} 
                width='300px'
            />
        </div>
    )

    return (
        <div className='DogList'>
            {cards}
        </div>
    )
}

export default DogList;
