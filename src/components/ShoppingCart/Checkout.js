import React, { Component } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.onRecieveToken = this.onRecieveToken.bind(this);
  }
  onRecieveToken(token) {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/checkout`, {token})
      .then(res => {

      })
  }
  render() {
    return (
      <StripeCheckout
        name="Knife Trend"
        image="https://s3-us-west-2.amazonaws.com/knifetrend-assets/square+logo.png"
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
        token={this.onRecieveToken}
        ComponentClass={Button}
      >
        Checkout
      </StripeCheckout>
    )
  }
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
