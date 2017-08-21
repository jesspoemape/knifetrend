import React from 'react';
import styled from 'styled-components';

const Header = ({cart}) => {
    const totalQty = cart.lineItems.reduce((acc, lineItem) => {
        return acc + lineItem.quantity
    }, 0)
    return (
            <HeaderWrapper>Your Cart ({totalQty} items)</HeaderWrapper>
    );
};


export default Header;

const HeaderWrapper = styled.h1`
    ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 40px;
    margin-bottom: 25px;
    ${props => props.theme.media.desktop} {
      font-size: 60px;
      margin-bottom: 40px;
    }
`