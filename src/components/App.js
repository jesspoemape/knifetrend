import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ Navbar } />
        { routes }
      </div>
    );
  }
}

export default App;
