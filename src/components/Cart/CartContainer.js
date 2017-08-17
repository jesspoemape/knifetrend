import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Header from './Header';
import ItemContainer from './ItemContainer/ItemContainer';
import AddNote from './AddNote';
import Checkout from './Checkout';
import Subtotal from './Subtotal';


const CartContainer = ({data:{viewer}}) => {
    return (
            <Container>
                <Header totalItemQuantity={viewer.shoppingCart.totalItemQuantity} />
                <Divider />
                <ItemContainer />
                <AddNote />
                <Subtotal />
                <Checkout />
            </Container>
        );
}
        
const ShoppingCartData = gql`
    query {
        viewer {
            id
            name
            avatar
            shoppingCart {
                totalItemQuantity
            }
        }
    }
  
`

export default graphqlWithLoading(ShoppingCartData)(CartContainer) ;

const Container = styled.div`
    width: 100%;
    padding: 60px 200px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
`
const Divider = styled.div`
    width: 130px;
    height: 5px;
    background-color: ${props => props.theme.secondary};
`