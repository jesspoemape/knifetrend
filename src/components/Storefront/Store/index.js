import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Search from './Search';
import Filter from './Filter';
import Items from './Items';

const Store = props => {
  const { maker } = props.data
  return (
    <div>
      <SearchAndFilter>
        <Search />
        <Filter />
      </SearchAndFilter>
      <Items itemsList={maker.items} />
    </div>
  )
}

const StoreQuery = gql`
  query($id: Int!) {
    maker(id:$id) {
      storeName
      coverPhoto
      profilePhoto
      ...ItemsContainer
    }
  }
  ${Items.fragment}
`

export default graphqlWithLoading(StoreQuery, {
  options: props => ({
    variables:{ id: props.match.params.makerId }
  })
})(Store);

const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
  ${props => props.theme.media.tablet}{
    flex-direction: row;
  }
  ${props => props.theme.media.desktop}{
    justify-content: flex-start;
  }

`
