import React from 'react';
import styled from 'styled-components';

// import Carousel from 'kt-components/Carousel'
import MakerTile from './../../MakerTile';

const MakerCarousel = props => {
    return(
        <CarouselContainer>
            <MakerTile/>
            <MakerTile/>
            <MakerTile/>
            <MakerTile/>
        </CarouselContainer>
    )
}

export default MakerCarousel;

const CarouselContainer = styled.div`
    height: 570px;
    background: #F5F5F5;
    width: 100%;
    padding: 30px;
    margin: 2px;
    white-space: nowrap;
    overflow: scroll;
    ${props => props.theme.media.desktop} {
      padding: 30px 125px;
    }
`
