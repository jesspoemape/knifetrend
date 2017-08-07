import React from 'react';
import { gql } from 'react-apollo';
import styled from 'styled-components';

const UserTile = ({id, name, avatar, username }) => {
  return (
    <div>
      <ProfileImg src={ avatar } />
      { name }
    </div>
  )
}

UserTile.fragment = gql`
  fragment UserTile on User {
    id
    name
    avatar
    username
  }
`
export default UserTile

const ProfileImg = styled.img`
  width: 200px;
  height: auto;
`
