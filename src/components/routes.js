import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About/About';
import Competitions from './Competitions/Competitions';
import Profile from './Profile/Profile';
import SignUp from './SignUp/SignUp';

export default (
  <Switch>
    <Route path="/about" component={ About } />
    <Route path="/competitions" component={ Competitions } />
    <Route path="/profile" component={ Profile } />
    <Route path="/sign-up" component={ SignUp } />
    <Route path="/" component={ Competitions } />
  </Switch>
)
