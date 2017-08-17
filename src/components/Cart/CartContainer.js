import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import ItemContainer from './ItemContainer/ItemContainer';
import AddNote from './AddNote';
import Checkout from './Checkout';
import Subtotal from './Subtotal';


class CartContainer extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Divider />
                <ItemContainer />
                <AddNote />
                <Subtotal />
                <Checkout />
            </Container>
        );
    }
}

export default CartContainer;

const Container = styled.div`
    width: 100%;
    padding: 60px 200px;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
`
const Divider = styled.div`
    width: 130px;
    height: 5px;
    background-color: ${props => props.theme.secondary};
`