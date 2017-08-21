import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import ButtonGroup from './ButtonGroup';
import EntryModal from './EntryModal';

class EntryTile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen:true})
  }

  closeModal() {
    this.setState({modalOpen:false})
  }
  render() {
    const { modalOpen } = this.state;
    const { entry:{ id, design: {name, imgUrl, user}, totalVotes, viewerVote, sendVote } } = this.props;

    return (
      <Tile>
        <TileHeader>
          <ProfileImg src={ user.avatar } />
          <StoreName>{ user.storeName }</StoreName>
        </TileHeader>
        <ProductImg src={ imgUrl }  onClick={ this.openModal }/>
        <TileFooter>
          <ProductName onClick={ this.openModal }>
            { name }
          </ProductName>
          <Votes>
            { totalVotes } <p>votes</p>
          </Votes>
          <ButtonGroup
            id={id}
            viewerVote={viewerVote}
            sendVote={sendVote}
          />
      </TileFooter>
      <EntryModal
        entry={this.props.entry}
        close={this.closeModal}
        isOpen={modalOpen}
      />
      </Tile>
    )
  }
}

EntryTile.fragment = gql`
  fragment EntryTile on Entry {
    id
    totalVotes
    viewerVote
    design {
      name
      desc
      imgUrl: primaryPhoto
      user {
        storeName: name
        avatar
    	}
    }
    comments {
      id
      createdAt
      text: content
      user {
        name
      }
    }
  }
`

export default EntryTile;

const Tile = styled.div`
  ${props => props.theme.mainFont({})}
  box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  background: #FFFFFF;
  margin: 10px;
  width: 315px;
`
const TileHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 10px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 35px;
  height: auto;
`
const StoreName = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
  color: #606060;
  cursor: pointer;
`

const ProductImg = styled.img`
  width: 315px;
  height: 315px;
  cursor: pointer;
`
const TileFooter = TileHeader.extend`
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px 10px 7px 10px;
`
const ProductName = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`
const Votes = styled.div`
  color: ${props => props.theme.main};
  font-size: 20pt;
  font-weight: 800;
  text-align: center;
  & p {
    font-weight: 200;
    font-size: 8pt;
    color: #95989A;
    text-transform: uppercase;
  }
`
