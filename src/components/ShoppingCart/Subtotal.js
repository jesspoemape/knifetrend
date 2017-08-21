import React from 'react';
import styled from 'styled-components';

const Subtotal = ({lineItems}) => {
    const subtotal = lineItems.reduce((acc, lineItem) => {
        return acc + (lineItem.quantity * lineItem.item.price)
    }, 0)
    return (
        <Container>
            <Sub>Subtotal:</Sub>
            <Sub>${subtotal}</Sub>
        </Container>
    );
};

export default Subtotal;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
`
const Sub = styled.h2`
    ${props => props.theme.secondaryFont({})};
    font-size: 35px;
    ${props => props.theme.media.desktop} {
      font-size: 45px;
    }
`