import React from 'react';
import styled from 'styled-components';

const Comments = ({ comments }) => (
  <CommentBox>
    { comments.map(comment => (
      <Comment key={comment.id}>
        <em>{ comment.user.name }</em> { comment.text }
      </Comment>
    ))}
  </CommentBox>
)

export default Comments;

const CommentBox = styled.div`
  max-height: 200px;
  width: 100%;
  overflow: scroll;
  display: flex;
  justify-content: space-between;
  padding: 0 0 10px 0;
  margin: 10px 0;
  border-top: solid thin #D9D9D9;
  border-bottom: solid thin #D9D9D9;
`
const Comment = styled.div`
  font-size: 10pt;
  padding: 5px 0px;
  & > em {
    font-weight: 700;
    margin-right: 5px;
  }
`
