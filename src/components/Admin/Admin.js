import React from 'react';
import { gql } from 'react-apollo';
import styled from 'styled-components';

import withViewer from 'kt-hocs/withViewer'
import graphqlWithLoading from 'kt-hocs/graphqlWithLoading'

import UserTile from './UserTile'

const Admin = ({viewer, data}) => {
  const userTiles = data.users.map(user => (
    <UserTile key={user.id} {...user} />
  ))
  return (
    <Container>
      { viewer ? viewer.name : "No one signed in"}
      <div>
        { userTiles }
      </div>
    </Container>
  )
}

const UserQuery = gql`
  query {
    users {
      ...UserTile
    }
  }
  ${UserTile.fragment}
`

export default withViewer(graphqlWithLoading(UserQuery)(Admin)) ;

const Container = styled.div`
  background-color: blue;
`
