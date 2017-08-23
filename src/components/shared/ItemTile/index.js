import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';
import { withStateHandlers, hoistStatics } from 'recompose';

import Footer from './Footer'
import Details from './Details'

const enhance = hoistStatics(withStateHandlers(
  { isOpen: false },
  { toggle: ({ isOpen }) => () => ({ isOpen: !isOpen }) }
))

const ItemTile = ({id, name, price, primaryPhoto, isOpen, toggle, open}) =>
  <Tile>
    <ItemImage url={primaryPhoto}/>
    { isOpen ?
      <Details {...{ id, name, price, toggle }} /> :
      <Footer {...{ name, price, toggle }} />
    }
  </Tile>

ItemTile.fragment = gql`
  fragment ItemTile on Item {
    id
    name
    price
    primaryPhoto
  }
`

export default enhance(ItemTile);

const Tile = styled.div`
  ${props => props.theme.mainFont({})}
  box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  margin: 10px;
  width: 300px;
`
const ItemImage = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 300px;
`
