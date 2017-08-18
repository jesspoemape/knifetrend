import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import ItemTile from './ItemTile'

const ItemsContainer = ({itemsList}) => {
    return (
        <Container>
          { itemsList.map(item => <ItemTile key={item.id} {...item} />) }
        </Container>
    )
}

ItemsContainer.fragment = gql`
  fragment ItemsContainer on Maker {
    items {
      ...ItemTile
    }
  }
  ${ItemTile.fragment}
`

export default ItemsContainer;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${props => props.theme.media.desktop}{
      justify-content: flex-start;
    }
`
