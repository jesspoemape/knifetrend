import React from 'react';
import styled from 'styled-components';

const Checkout = () => {
    return (
        <Button>Proceed to checkout</Button>
    );
};

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
`