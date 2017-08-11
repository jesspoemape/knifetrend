import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo'

import ItemTile from '../../ItemTile';
import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

const FeaturedKnivesCarousel = ({data}) => {
    return (
        <TileWrapper>
            {data.items.map(item => {
              return(
                <ItemTile key={item.id}{...item} />
              )
            })}
        </TileWrapper>
    );
};

const ItemsQuery = gql`
  query {
    items{
      ...ItemTile
    }
}
${ItemTile.fragment}
`

export default graphqlWithLoading(ItemsQuery)(FeaturedKnivesCarousel);

const TileWrapper = styled.section`
    display: flex;
    overflow: scroll;
    background: #F5F5F5;
    max-width: 1165px;
    margin: auto;

    &::-webkit-scrollbar{
        display: none;
    }

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
