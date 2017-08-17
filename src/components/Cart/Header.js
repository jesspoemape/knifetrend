import React from 'react';
import styled from 'styled-components';

const Header = ({totalItemQuantity}) => {
    return (
            <HeaderWrapper>Your Cart ({totalItemQuantity} items)</HeaderWrapper>
    );
};


export default Header;

const HeaderWrapper = styled.h1`
    ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 60px;
    margin-bottom: 40px;
`