import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

const URL = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-1.jpg'

const ItemThumbnails = ({primaryPhoto, name, price}) => {
    return (
        <div>
            <Tile>
                <KnifeImage url={URL}/>
                <Name>Sure Slice</Name>
                <Price>$229.99</Price>
            </Tile>
        </div>
    );
};

ItemThumbnails.fragment = gql`
  fragment ItemThumbnails on Item {
    maker {
        id
    }
    id
    primaryPhoto
    name
    price
  }
`

export default ItemThumbnails;

const Tile = styled.div`
    height: 294px;
    width: 232px;
    background: gray;
    margin: 5px 5px;
`
const KnifeImage = styled.div`
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    height: 232px;
    width: 100%;
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
