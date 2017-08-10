import React from 'react';
import styled from 'styled-components';

import ItemTile from '../../ItemTile';

const Carousel = () => {
    return (
        <TileWrapper>
            <ItemTile/>
            <ItemTile/>
            <ItemTile/>
            <ItemTile/>
            <ItemTile/>
        </TileWrapper>
    );
};

export default Carousel;

const TileWrapper = styled.section`
    display: flex;
    overflow: scroll;
    background: #F5F5F5;
    max-width: 1165px;
    margin: auto;

    @media(max-width: 1164px) {
       max-width: 875px; 
    }
    @media(max-width: 874px) {
       max-width: 580px; 
    }
    @media(max-width: 579px) {
       max-width: 292px; 
    }
`