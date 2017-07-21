import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import Competitions from './Competitions/Competitions';
import Profile from './Profile/Profile';
import SignUp from './SignUp/SignUp';

export default (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route path="/competitions" component={ Competitions } />
    <Route path="/profile" component={ Profile } />
    <Route path="/sign-up" component={ SignUp } />
  </Switch>
)
