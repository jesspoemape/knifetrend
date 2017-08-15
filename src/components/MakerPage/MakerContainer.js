import React from 'react';
import styled from 'styled-components';

import Cover from './Cover'
import MenuContainer from './MakerMenu/MenuContainer';

const MakerContainer = () => {
    return (
        <div>
            <Cover/>
            <Container>
                <MenuContainer/>
            </Container>
        </div>
    );
};

export default MakerContainer;

const Container = styled.section`
    display: flex;
    justify-content: flex-start;
`