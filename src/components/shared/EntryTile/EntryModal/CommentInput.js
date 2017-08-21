import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

import MinimalButton from 'kt-components/MinimalButton';

class CommentInput extends Component {
  constructor(props) {
    super(props)

    this.state = { comment: '' }

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  submit() {
    const{ mutate, id } = this.props

    mutate({
      variables: {
        id:id,
        text: this.state.comment
      }})

    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <CommentContainer>
        <Input onChange={ this.handleChange } value={this.state.comment} placeholder="Comment Here" />
        <RedButton onClick={this.submit}>Comment</RedButton>
      </CommentContainer>
    )
  }
}

const comment = gql`
  mutation makeComment($id:Int!, $text:String!) {
    comment(EntryId: $id, text: $text) {
      id
      comments {
        id
        createdAt
        text: content
        user {
          name
        }
      }
    }
  }
`

export default graphql(comment)(CommentInput)

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 10px 0;
`
const Input = styled.textarea`
  width: 99%;
  height: 50px;
  vertical-align: middle;
  outline: none;
  resize: none;
  font-size: 10pt;
  font-family: Arial;
  border-color: #BFBFBF;
  &::placeholder {
    font-style: italic;
    font-color: #BFBFBF;
  }
`
const RedButton = styled(MinimalButton)`
  background: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  color: white;
  margin: 8px 0;
`
