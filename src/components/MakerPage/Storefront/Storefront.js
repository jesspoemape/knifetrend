import React from 'react';
import styled from 'styled-components';

const Storefront = () => {
    return (
        <Container>
            Storefront Page
        </Container>
    );
};

export default Storefront;

const Container = styled.section`
    margin-top: 60px;
    min-height: 200px;
    background: gray;
    width: 100vw;
    margin-left: -38px;
    ${props => props.theme.media.phone}{
        margin-top: 80px;
    }
    ${props => props.theme.media.tablet}{
        margin-top: 100px;
    }
    ${props => props.theme.media.desktop}{
        margin-left: 0px;
`
