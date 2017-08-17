import React from 'react';
import styled from 'styled-components';
import {gql, graphql} from 'react-apollo';

const Header = ({totalItemQuantity}) => {
    console.log('PROPS', this.props);
    return (
            <HeaderWrapper>Your Cart ({totalItemQuantity} items)</HeaderWrapper>
    );
};

// Header.fragment = gql`
//     fragment Header on ShoppingCart {
//             shoppingCart {
//                 totalItemQuantity
//             }
//         }
// `

export default Header;

const HeaderWrapper = styled.h1`
    ${props => props.theme.secondaryFont({})};
    color: ${props => props.theme.main};
    font-size: 60px;
    margin-bottom: 40px;
`