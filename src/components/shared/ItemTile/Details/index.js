import React from 'react';
import styled from 'styled-components';

import currency from 'kt-utils/currency';
import DefaultDivider from 'kt-components/Divider';

import AddToCartButton from './AddToCartButton';

export default ({ id, name, price, toggle }) => {

  const onMouseLeave = () => setTimeout(toggle, 500)

  return (
    <Details onMouseLeave={onMouseLeave}>
      <Info>
        <LargeText>Add To Cart</LargeText>
        <Name>{ name }</Name>
        <Price>{ currency(price) }</Price>
        <SmallText>+ { currency(12.80) } Shipping</SmallText>
        <Divider />
        <SmallText>Total</SmallText>
        <Price>{ currency(price) }</Price>
      </Info>
      <AddToCartButton {...{id, toggle}} />
    </Details>
  )
}


const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Info = styled.div`
  padding: 20px;
  width: 300px;
  height: 185px;
  position: absolute;
  background: white;
  margin-top: -185px;
`
const LargeText = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 14pt;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
`
const Name = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12pt;
  margin-bottom: 2px;
`
const Price = styled.p`
  font-weight: 700;
  font-size: 18pt;
  color: ${props => props.theme.main};
  margin-bottom: 2px;
`
const SmallText = styled.p`
  color: ${props => props.theme.secondary};
  font-weight: 300;
  font-size: 10pt;
`
const Divider = styled(DefaultDivider)`
  background: #95989A;
  width: 120px;
  margin: 12px 0px;
`
