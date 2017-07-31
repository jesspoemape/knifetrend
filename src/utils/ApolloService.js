import { ApolloClient, createNetworkInterface } from 'react-apollo';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    opts: {
      credentials: 'include'
    }
  })
})
