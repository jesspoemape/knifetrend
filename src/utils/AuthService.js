import { graqhql, gql } from 'react-apollo';

const wrapWithUser = Component => {

}

const Viewer = gql`
  query {
    viewer {
      id
      name
      avatar
    }
  }
`
