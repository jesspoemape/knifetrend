import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing/Landing';
import Competition from './Competition/Competition';

export default props => {
  return (
      <Switch>
        <Route path="/competitions/:competitionId" component={ Competition } />
        <Route path="/" component={ Landing } />
      </Switch>
  )
}
