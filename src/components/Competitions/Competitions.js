import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import CompetitionPage from './CompetitionPage/CompetitionPage';

export default props => (
    <Switch>
      <Route exact path="/competitions" component={ Home } />
      <Route path="/competitions/:id" component={ CompetitionPage } />
    </Switch>
)
