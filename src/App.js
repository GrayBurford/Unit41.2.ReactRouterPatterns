import React from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';
import whiskey from './dogpics/whiskey.jpg'
import duke from './dogpics/duke.jpg'
import perry from './dogpics/perry.jpg'
import tubby from './dogpics/tubby.jpg'
import { v4 as uuid } from 'uuid';
import { BrowserRouter } from 'react-router-dom';


function App({ dogs }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs.map(dog => dog.name)} />
        <Routes dogs={dogs} />      
      </BrowserRouter>
    </div>
  );
}



App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      id : uuid(),
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      id : uuid(),
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      id : uuid(),
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      id : uuid(),
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
