import React from 'react';
import styled from 'styled-components';

import MakerNavbar from './MakerNavbar';
import MakerDetails from './MakerDetails';

const MenuContainer = () => {
    return (
        <Container>
            <MakerNavbar />
            <MakerDetails />
        </Container>
    );
};

export default MenuContainer;

const Container = styled.aside`
    width: 300px;
    background: black;
    height: 100%;
`