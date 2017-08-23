import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Competitions from './Competitions';
import Shop from './Shop';
import Storefront from './Storefront';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile'
import Footer from './Footer';

export default props => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/competitions" component={ Competitions } />
      <Route path="/shop" component={ Shop } />
      <Route path="/storefront/:makerId" component={ Storefront } />
      <Route path="/cart" component={ ShoppingCart } />
      <Route path="/profile" component={ Profile } />
    </Switch>
    <Footer />
  </div>
)
