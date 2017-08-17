import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo'

import Item from './Item';

const ItemContainer = ({cart}) => {
    const shoppingCartLineItems = cart.lineItems.map(lineItem => {
        return <Item key={lineItem.id} {...lineItem} />
    })
    return (
        <Container>
            <Header>Item Summary</Header>
            { shoppingCartLineItems }
        </Container>
    );
};

ItemContainer.fragment = gql`
    fragment LineItemContainer on ShoppingCart {
        lineItems {
            ...LineItem
        }
    }
    ${Item.fragment}
`

export default ItemContainer;

const Container = styled.div`
    width: 100%;
`
const Header = styled.h3`
    ${props => props.theme.secondaryFont({})}; 
    font-size: 42px;
    margin: 40px 0;   
`


