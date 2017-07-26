import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter} from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import client from './utils/ApolloService';
import theme from './utils/Theme';
import App from './components/App';

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
