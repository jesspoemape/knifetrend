import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Competitions from './Competitions/Competitions';
import Shop from './Shop/Shop';
import Storefront from './Storefront/Storefront';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const App = props => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/competitions" component={ Competitions } />
      <Route path="/shop" component={ Shop } />
      <Route path="/storefront/:makerId" component={ Storefront } />
      <Route path="/cart" component={ ShoppingCart } />
    </Switch>
    <Footer />
  </div>
)
export default App;
