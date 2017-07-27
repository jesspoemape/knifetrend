import React from 'react';
import styled from 'styled-components';

import EntryTile from './EntryTile';

const EntriesContainer = ({ competition }) => {

  const entryTiles = competition.entries ? competition.entries.map(entry => {
    return (
      <EntryTile key={entry.id} {...entry}/>
    )
  }) : ''
  return (
    <Container>
      { entryTiles }
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #F5F5F5;
  padding: 0 10px;
`

export default EntriesContainer
