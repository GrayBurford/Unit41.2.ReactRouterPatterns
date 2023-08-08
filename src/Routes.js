import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Routes ({ dogs }) {
    return (
    
        <Switch>
            <Route exact path="/dogs">
                <DogList dogs={dogs} />
            </Route>
            <Route exact path="/dogs/:name">
                <Dog dogs={dogs} />
            </Route>            
            <Redirect to="/dogs" />
        </Switch>        
        
    )
}

export default Routes;