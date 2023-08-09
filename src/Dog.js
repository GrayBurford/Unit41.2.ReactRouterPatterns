import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


function Dog ({ dogs }) {
    const { name } = useParams();
    const dog = dogs.filter(dog => dog.name === name)[0];

    const facts = dog.facts.map(fact => <h4 key={uuid()}>{fact}</h4>)

    return (
        <div>
            <h1>Hi! My name is {name}</h1>
            <h3>{`I'm ${dog.age} year's old!`}</h3>
            <h3>{`My ID is: ${dog.id}`}</h3>
            <img 
                src={dog.src}
                alt={`This is ${dog.name}'s picture`} 
                width='500px'
            />
            {facts}
        </div>
    )
}

export default Dog;

