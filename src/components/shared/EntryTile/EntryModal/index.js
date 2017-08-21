import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import ReactModal from 'react-modal';

import Header from './Header';
import ButtonGroup from './../ButtonGroup';
import Comments from './Comments';
import CommentInput from './CommentInput';

const EntryModal = ({ entry, sendVote, close, isOpen }) => {
  return (
    <ReactModal
      contentLabel='modal-label'
      isOpen={isOpen}
      onRequestClose={close}
    >
      <Container>
        <Media
          query="(max-width: 950px)"
          render={ () => <Header entry={entry} close={close} /> }
        />
        <EntryImg src={ entry.design.imgUrl } />
        <EntryDetails>
          <Media
            query="(min-width: 950px)"
            render={ () => <Header entry={entry} close={close} /> }
          />
          <Section>
            <Name>{ entry.design.name }</Name>
            <Votes>{ entry.totalVotes } <p>votes</p></Votes>
          </Section>
          <ButtonGroup id={entry.id} viewerVote={entry.viewerVote} sendVote={sendVote} />
          <Desc>{ entry.design.desc }</Desc>
          <Comments comments={ entry.comments } />
          <CommentInput id={entry.id} />
        </EntryDetails>
      </Container>
    </ReactModal>
  )
}

export default EntryModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.desktop} {
    flex-direction: row;
    height: 500px;
  }
`
const EntryDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  height: 100%;
  min-width: 325px;
  max-width: 400px;
  padding: 20px;
  ${props => props.theme.media.desktop} {
    padding-top: 0px;
  }
`
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 0px;
  border-bottom: solid thin #D9D9D9;
`
const Name = styled.h2`
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
const Desc = styled.div`
  font-weight: 300;
  font-size: 10pt;
`
const EntryImg = styled.img`
  width: 100%;
  height: auto;
  ${props => props.theme.media.mobile} {
    max-width: 400px;
    height: auto;
  }
  ${props => props.theme.media.desktop} {
    max-height: 500px;
    max-width: 100%;
    width: auto;
  }
`
