import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';

const Subtotal = ({lineItems}) => {
    const subtotal = lineItems.reduce((acc, lineItem) => {
        return acc + (lineItem.quantity * lineItem.item.price)
    }, 0)
    const value = numeral(subtotal).format('$ 0,0[.]00');
    return (
        <Container>
            <Sub>Subtotal:</Sub>
            <Sub>{value}</Sub>
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