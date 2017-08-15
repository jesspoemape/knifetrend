import React from 'react';
import styled from 'styled-components';

import Cover from './Cover'
import MenuContainer from './MakerMenu/MenuContainer';

const MakerContainer = () => {
    return (
        <Container>
            <Cover/>
            <MenuContainer/>
        </Container>
    );
};

export default MakerContainer;

const Container = styled.section`
    background: #f5f5f5;
`