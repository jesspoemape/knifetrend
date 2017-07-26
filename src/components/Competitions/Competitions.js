import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Entries from './Entries/Entries';

export default props => (
    <Switch>
      <Route exact path="/competitions" component={ Home } />
      <Route path="/competitions/:id" component={ Entries } />
    </Switch>
)
