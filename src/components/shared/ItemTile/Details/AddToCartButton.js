import React from 'react';
import styled from 'styled-components';
import { gql, graphql } from 'react-apollo';

const AddToCartButton = ({ id, toggle, mutate }) => {
  const onClick = () => {
    mutate({ variables: {id} })
    toggle()
  }
  return (
    <Button onClick={onClick} >
      Add To Cart
    </Button>
  )
}

const addToCartMutation = gql`
  mutation addToCart($id:Int!) {
    addToCart(ItemId: $id, quantity: 1) {
      id
      shoppingCart {
        id
        totalItemQuantity
        lineItems {
          id
          quantity
        }
      }
    }
  }
`

export default graphql(addToCartMutation)(AddToCartButton)

const Button = styled.div`
  background: ${props => props.theme.main};
  text-transform: uppercase;
  width: 100%;
  height: 61px;
  font-size: 14pt;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #B20E0D;
  }
`
