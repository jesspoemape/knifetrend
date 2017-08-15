import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MakerContainer from './MakerContainer'
import Storefront from './Storefront/Storefront'
import Competition from './Competition/Competition'

export default props => (
  <div>
    <Route path='/makers' component = { MakerContainer }/>
    <Switch>
      <Route exact path="/makers/" component={ Storefront } />
      <Route path="/makers/competition" component={ Competition } />
    </Switch>
  </div>
)
