import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Competition from './Competition';

export default props => 
  <Switch>
    <Route exact path="/competitions" component={ Home } />
    <Route path="/competitions/:id" component={ Competition } />
  </Switch>
