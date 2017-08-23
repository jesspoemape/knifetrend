import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import ItemTile from './../../shared/ItemTile'

const Items = ({itemsList}) =>
  <Container>
    { itemsList.map(item => <ItemTile key={item.id} {...item} />) }
  </Container>

Items.fragment = gql`
  fragment ItemsContainer on Maker {
    items {
      ...ItemTile
    }
  }
  ${ItemTile.fragment}
`

export default Items;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${props => props.theme.media.desktop}{
      justify-content: flex-start;
    }
`
