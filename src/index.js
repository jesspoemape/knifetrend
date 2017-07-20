import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import './styles/base.css';
import App from './components/App';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql'
  })
})

ReactDOM.render(
  <HashRouter>
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>
  </HashRouter>
  , document.getElementById('root')
);
