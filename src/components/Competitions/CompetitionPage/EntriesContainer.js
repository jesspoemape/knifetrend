import React, { Component } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import MyModal from './EntryModal';

import EntryTile from './EntryTile';

class EntriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      selectedEntry: null
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(entryId) {
    const entry = this.props.competition.entries.find(entry => entry.id == entryId)
    this.setState({
      showModal: true,
      selectedEntry: entry
    })
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  render() {
    const { competition } = this.props
    const { showModal, selectedEntry } = this.state

    const entryTiles = competition.entries ? competition.entries.map(entry => {
      return (
        <EntryTile key={entry.id} {...entry} viewEntry={ this.openModal }/>
      )
    }) : ''

    return (
      <Container>
        { entryTiles }
        <MyModal
          isOpen={ showModal }
          onRequestClose={ this.closeModal }
          contentLabel="Test Modal"
          {...selectedEntry}
        />
      </Container>
    )
  }
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
