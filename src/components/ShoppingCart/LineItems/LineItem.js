import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo'

import Quantity from './Quantity';

const Item = ({item, quantity}) => {
  return (
    <MainContainer>
      <LeftContainer>
        <Image src={item.primaryPhoto}/>
        <DetailContainer>
          <Name>{item.name}</Name>
          <Totals>${item.price}</Totals>
          <MinimalText>+ $12.87 Shipping</MinimalText>
          <Divider />
          <MinimalText>Total</MinimalText>
          <Totals>${item.price * quantity}</Totals>
        </DetailContainer>
      </LeftContainer>
      <RightContainer>
        <Quantity quantity={ quantity } itemId={item.id}/>
      </RightContainer>
    </MainContainer>
  )
}

Item.fragment = gql`
  fragment LineItem on ShoppingCartLineItem {
    id
    quantity
    item {
        id
        name
        price
        primaryPhoto
    }
  }
`

export default Item;

const MainContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.secondary};
`
const LeftContainer = styled.div`
    width: 80%;
    padding: 40px 0;
    display: flex;
    align-items: center;
    ${props => props.theme.media.desktop} {
      width: 50%;
    }
`
const Image = styled.img`
    width: 130px;
    height: 130px;
    ${props => props.theme.media.desktop} {
      width: 175px;
      height: 175px;
    }
    ${props => props.theme.media.tablet} {
      width: 150px;
      height: 150px;
    }
`
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0 30px 20px;
    ${props => props.theme.mainFont({})};
    ${props => props.theme.media.desktop} {
      padding: 30px 25px;
    }
`
const Name = styled.h4`
    font-weight: 800;
    text-transform: uppercase;
    font-size: 
`
const Totals = styled.h3`
    color: ${props => props.theme.main};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    ${props => props.theme.media.desktop} {
      font-size: 20px;
    }
`
const MinimalText = styled.h6`
    font-size: 14px;
`
const Divider = styled.div`
    width: 100px;
    margin: 8px 0;
    border-bottom: 1px solid ${props => props.theme.secondary};
`
const RightContainer = styled.section`
    width: 20%;
    display: flex;
    justify-content: flex-end;
    ${props => props.theme.media.desktop} {
      width: 50%;
    }
`
