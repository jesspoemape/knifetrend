import React from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';


const Checkout = () => {
  const onRecieveToken = token => {
    console.log('I got this token back:', token)
  }
  return (
    <StripeCheckout
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      token={onRecieveToken}
      ComponentClass={Button}
    >
    Checkout
  </StripeCheckout>
  )
}

export default Checkout;

const Button = styled.button`
  ${props => props.theme.secondaryFont({})}
  background-color: ${props => props.theme.main};
  text-transform: uppercase;
  border: none;
  color: white;
  height: 70px;
  font-size: 32px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #B20E0D;
  }
`
