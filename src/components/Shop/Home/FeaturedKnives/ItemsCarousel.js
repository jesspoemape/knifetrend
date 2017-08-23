import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo'

import ItemTile from '../../../shared/ItemTile';
import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

const FeaturedKnivesCarousel = ({data}) => {
  return (
    <TileWrapper>
      { data.items.map(item => <ItemTile key={item.id}{...item} />) }
    </TileWrapper>
  )
}

FeaturedKnivesCarousel.displayName = 'FeaturedKnivesCarousel'

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
  @media(min-width: 1280px) {
     max-width: 1280px;
  }
  @media(max-width: 1279px) {
     max-width: 960px;
  }
  @media(max-width: 959px) {
     max-width: 640px;
  }
  @media(max-width: 639px) {
     max-width: 320px;
  }
`
