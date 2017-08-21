import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';
import {Link} from 'react-router-dom';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Header from './Header';
import LineItems from './LineItems/LineItemsContainer';
import AddNote from './AddNote';
import Checkout from './Checkout';
import Subtotal from './Subtotal';

const ShoppingCart = ({data}) => {
  const cart = data.viewer.shoppingCart;
  console.log(cart.totalItemQuantity);
if (cart.totalItemQuantity !== 0) {
  return (
    <Container>
      <Header cart={cart} />
      <Divider />
      <LineItems lineItems={cart.lineItems} />
      <AddNote />
      <Subtotal lineItems={cart.lineItems} />
      <Checkout />
    </Container>
  )
}
else {
  return (
    <Container>
      <EmptyCart>There are no items in your cart! Head to the <Link to='/shop'>Shop</Link>.</EmptyCart>
    </Container>   
  )
}
  
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
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    ${props => props.theme.media.desktop} {
      padding: 60px 200px;
    }
    ${props => props.theme.media.tablet} {
      padding: 40px 100px;
    }
`
const Divider = styled.div`
    width: 130px;
    height: 5px;
    background-color: ${props => props.theme.secondary};
`
const EmptyCart = styled.h2`
  ${props => props.theme.secondaryFont({})};
  font-size: 48px;
`
