import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading'

import EntryTile from './../../shared/EntryTile';

const Entries = ({data}) => {
  const entries = data.maker.user.entries
  return (
      <Container>
          {entries.map(entry => <EntryTile key={entry.id} entry={entry} />)}
      </Container>
  );
};

const EntriesQuery = gql`
  query($id: Int!) {
    maker(id:$id) {
      id
      user {
        entries {
          ...EntryTile
        }
      }
    }
  }
  ${EntryTile.fragment}
`

export default graphqlWithLoading(EntriesQuery, {
  options: props => ({
    variables:{ id: props.match.params.makerId }
  })
})(Entries);


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${props => props.theme.media.desktop}{
      justify-content: flex-start;
    }
`
