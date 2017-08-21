import React from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import MinimalButton from 'kt-components/MinimalButton';

import check from './../../../assets/check.svg';
import share from './../../../assets/share.svg';
import tag from './../../../assets/tag.svg';

const EntryButtonGroup = ({ id, viewerVote, mutate }) => {

  const saveVote = () => {
    mutate({
      variables: {entryId:id}
    })
  }

  return (
    <ButtonGroup>
      <Button viewerVote={ viewerVote } onClick={ saveVote }>
        Vote <Icon path={ check } />
      </Button>
      <Button>Share <Icon path={ share } /></Button>
      <Button>Pre-Order <Icon path={ tag } /></Button>
    </ButtonGroup>
  )
}

const vote = gql`
  mutation addVote($entryId: Int!) {
    vote(EntryId: $entryId){
      id
      totalVotes
      viewerVote
    }
  }
`
export default graphql(vote)(EntryButtonGroup);

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`
const Button = MinimalButton.extend`
  color: #606060;
  border-color: #606060;
  font-size: 12px;
  ${props => props.viewerVote &&
    `color: white;
    background-color: ${props.theme.main};
    border-color: ${props.theme.main};
    svg {
      stroke: white;
    }`
  }
  &:hover {
    color: white;
    background-color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
    svg {
      stroke: white;
    }
  }
`
const Icon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #606060;
  margin-left: 5px;
`
