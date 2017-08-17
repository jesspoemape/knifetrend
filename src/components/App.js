import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import Competitions from './Competitions/Competitions';
import Profile from './Profile/Profile';
import SignUp from './SignUp/SignUp';
import Admin from './Admin/Admin';
import Shop from './Shop/Shop';
import MakerPage from './MakerPage/MakerPage';
import CartContainer from './Cart/CartContainer';

const App = props => (
  <div>
    { /* Navbar put in route in order to provide it with the Router navgition props */ }
    <Route path="/" component={ Navbar } />
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/competitions" component={ Competitions } />
      <Route path="/profile" component={ Profile } />
      <Route path="/sign-up" component={ SignUp } />
      <Route path="/admin" component={ Admin } />
      <Route path="/shop" component={ Shop } />
      <Route path="/makers" component={ MakerPage } />
      <Route path="/cart" component={ CartContainer } />
    </Switch>
    <Footer />
  </div>
)
export default App;
