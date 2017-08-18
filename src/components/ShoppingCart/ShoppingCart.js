import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Header from './Header';
import LineItems from './LineItems/LineItemsContainer';
import AddNote from './AddNote';
import Checkout from './Checkout';
import Subtotal from './Subtotal';

const ShoppingCart = ({data}) => {
  const cart = data.viewer.shoppingCart;
  return (
    <Container>
      <Header totalItemQuantity={cart.totalItemQuantity} />
      <Divider />
      <LineItems lineItems={cart.lineItems} />
      <AddNote />
      <Subtotal />
      <Checkout />
    </Container>
  )
}

const ShoppingCartData = gql`
  query {
    viewer {
      id
      name
      avatar
      shoppingCart {
          totalItemQuantity
          ...LineItemContainer
      }
    }
  }
  ${LineItems.fragment}
`

export default graphqlWithLoading(ShoppingCartData)(ShoppingCart) ;

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
