import { ApolloClient, createNetworkInterface } from 'react-apollo';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
    opts: {
      credentials: 'include'
    }
  })
})
