import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

const ItemTile = ({primaryPhoto, name, price}) => {
  return (
    <Tile>
      <KnifeImage url={primaryPhoto}/>
      <Name>{ name }</Name>
      <Price>${ price }</Price>
    </Tile>
  )
}

ItemTile.fragment = gql`
  fragment ItemTile on Item {
    id
    primaryPhoto
    name
    price
  }
`

export default ItemTile;

const Tile = styled.div`
    margin: 20px;
    background: white;
    box-shadow: ${props => props.theme.shadow}
`
const KnifeImage = styled.div`
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 250px;
`
const Name = styled.p`
    padding: 14px 10px 0px 10px;
    ${props => props.theme.mainFont({})};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12pt;
`
const Price = styled.p`
    ${props => props.theme.mainFont({})};
    font-weight: 700;
    font-size: 16pt;
    color: ${props => props.theme.main};
    padding: 3px 0 0 10px;
`
