import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
            <HeaderWrapper>Your Cart (2 items)</HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.h1`
    ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 60px;
    margin-bottom: 40px;
`