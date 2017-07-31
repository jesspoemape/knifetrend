import { ApolloClient, createNetworkInterface } from 'react-apollo';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${process.env.REACT_APP_SERVER_URL}/graphql`,
    opts: {
      credentials: 'include'
    }
  })
})
