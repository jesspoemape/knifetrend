import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { theme } from 'shared-components';

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
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </HashRouter>
  , document.getElementById('root')
);
