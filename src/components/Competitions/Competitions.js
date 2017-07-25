import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';


export default props => (
    <Switch>
      <Route exact path="/competitions" component={ Home } />
      <Route path="/competitions/:competitionId" render={ props => (<div>hello</div>) } />
    </Switch>
)
