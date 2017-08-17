import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const ItemContainer = () => {
    return (
        <Container>
            <Header>Item Summary</Header>
            <Item />
            <Item />
            <Item />
        </Container>
    );
};

export default ItemContainer;

const Container = styled.div`
    width: 100%;
`
const Header = styled.h3`
    ${props => props.theme.secondaryFont({})}; 
    font-size: 42px;
    margin: 40px 0;   
`


