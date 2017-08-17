import React from 'react';
import styled from 'styled-components';

const Subtotal = () => {
    return (
        <Container>
            <Sub>Subtotal:</Sub>
            <Sub>771.87</Sub>
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
    font-size: 45px;

`