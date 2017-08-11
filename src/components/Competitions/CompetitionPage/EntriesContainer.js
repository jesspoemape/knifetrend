import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import EntryModal from './Modal/EntryModal';
import EntryTile from './EntryTile';

class EntriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      modalEntryIndex: 0
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(entryId) {
    const entryIndex = this.props.competition.entries.findIndex(entry => entry.id === entryId)
    this.setState({modalOpen:true, modalEntryIndex:entryIndex})
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { competition, mutate } = this.props
    const { modalOpen, modalEntryIndex } = this.state

    const entryTiles = competition.entries ? competition.entries.map(entry => {
      return (
        <EntryTile key={entry.id} sendVote={ mutate } showModal={ this.openModal } {...entry} />
      )
    }) : ''

    return (
      <Container>
        { entryTiles }

            <EntryModal
              entry={competition.entries[modalEntryIndex]}
              close={this.closeModal}
              sendVote={mutate}
              isOpen={modalOpen}
            />

      </Container>
    )
  }
}

EntriesContainer.fragment = gql`
  fragment EntriesContainer on Competition {
    entries {
      ...EntryTile
    }
  }
  ${EntryTile.fragment}
`

const vote = gql`
  mutation addVote($entryId: Int!) {
    vote(EntryId: $entryId),
    {
      ...EntryTile
    }
  }
  ${EntryTile.fragment}
`

export default graphql(vote)(EntriesContainer)

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #F5F5F5;
  padding: 0 10px;
`
