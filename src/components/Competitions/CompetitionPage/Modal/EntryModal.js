import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import EntryButtonGroup from './../EntryButtonGroup';
import ModalContainer from './ModalContainer';
import CommentInput from './CommentInput';

const EntryModal = props => {
  const { entry, sendVote } = props
  return (
    <ModalContainer {...props}>
      <Container>
        <Media query="(max-width: 950px)" render={()=>(
          <TileHeader>
            <ProfileImg src={ entry.design.user.avatar } />
            <StoreName>{ entry.design.user.storeName }</StoreName>
          </TileHeader>
          )}/>
        <EntryImg src={ entry.design.imgUrl } />
        <EntryDetails>
          <Media query="(min-width: 950px)" render={()=>(
            <TileHeader>
              <ProfileImg src={ entry.design.user.avatar } />
              <StoreName>{ entry.design.user.storeName }</StoreName>
            </TileHeader>
            )}/>

          <Section>
            <ProductName>
              { entry.design.name }
            </ProductName>
            <Votes>
              { entry.totalVotes } <p>votes</p>
            </Votes>
          </Section>
          <Section>
            <div>
              <EntryButtonGroup id={entry.id} viewerVote={entry.viewerVote} sendVote={sendVote} />
              <EntryDesc>
                { entry.design.desc }
              </EntryDesc>
            </div>
          </Section>
          <Section>
            <CommentBox>
              {
                entry.comments.map(comment => {

                  return (
                    <Comment key={comment.id}>
                      <em>{ comment.user.name }</em> { comment.text }
                    </Comment>
                  )
                })
              }
            </CommentBox>
          </Section>
          <CommentInput id={entry.id} />
        </EntryDetails>
      </Container>
    </ModalContainer>
  )
}

export default EntryModal;

const CommentBox = styled.div`
  max-height: 100px;
  overflow: scroll;
`
const Comment = styled.div`
  font-size: 10pt;
  padding: 5px 0px;

  & > em {
    font-weight: 700;
    margin-right: 5px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.desktop} {
    flex-direction: row;
  }
`
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 0px;
  padding: 0 0 10px 0;
  border-bottom: solid thin #D9D9D9;
`
const EntryDesc = styled.div`
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

const EntryDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  height: 100%;
  min-width: 325px;
  max-width: 400px;
  padding-top: 10px;
  ${props => props.theme.media.desktop} {
    padding-top: 0px;
  }
`
const TileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  background: white;
  ${props => props.theme.media.desktop} {
    margin-bottom: 10px;
  }
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
