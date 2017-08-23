import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

export default props => (
    <Switch>
      <Route exact path="/shop" component={ Home } />
    </Switch>
)
