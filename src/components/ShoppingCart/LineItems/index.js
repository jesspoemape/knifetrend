import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo'

import LineItem from './LineItem';

const LineItems = ({lineItems}) => {
  return (
    <Container>
      <Header>Item Summary</Header>
      { lineItems.map(lineItem => {
          return <LineItem key={lineItem.id} {...lineItem} />
      })}
    </Container>
  )
}

LineItems.fragment = gql`
    fragment LineItems on ShoppingCart {
        lineItems {
            ...LineItem
        }
    }
    ${LineItem.fragment}
`

export default LineItems;

const Container = styled.div`
    width: 100%;
`
const Header = styled.h3`
    ${props => props.theme.secondaryFont({})};
    font-size: 30px;
    margin: 25px 0;
    ${props => props.theme.media.desktop} {
      font-size: 42px;
      margin: 40px 0;
    }
`
