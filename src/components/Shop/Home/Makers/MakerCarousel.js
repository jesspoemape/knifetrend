import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

// import Carousel from 'kt-components/Carousel'
import MakerTile from './../../MakerTile';

const MakerCarousel = ({ data }) => {
    return(
        <CarouselContainer>
            {data.makers.map(maker => {
                return (<MakerTile key={maker.id}{...maker}/>)
            })}
        </CarouselContainer>
    )
}

const MakersQuery = gql`
    query {
        makers {
            ...MakerTile
        }
    }
    ${MakerTile.fragment}
`


export default graphqlWithLoading(MakersQuery)(MakerCarousel);

const CarouselContainer = styled.div`
    background: #F5F5F5;
    max-width: 1050px;
    margin: 0 auto 40px auto;
    padding: 10px 0;
    white-space: nowrap;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    @media(max-width: 1049px) {
        max-width: 698px;
    }
    @media(max-width: 697px) {
        max-width: 352px;
    }
`
