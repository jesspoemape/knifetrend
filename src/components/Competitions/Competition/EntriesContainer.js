import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import EntryTile from './../../shared/EntryTile';

const EntriesContainer = ({ entries , mutate }) => {

  const entryTiles = entries.map(entry => <EntryTile key={entry.id} entry={entry} /> )

  return (
    <Container>
      { entryTiles }
    </Container>
  )
}

EntriesContainer.fragment = gql`
  fragment EntriesContainer on Competition {
    entries {
      ...EntryTile
    }
  }
  ${EntryTile.fragment}
`

export default EntriesContainer

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #F5F5F5;
  padding: 0 10px;
`
