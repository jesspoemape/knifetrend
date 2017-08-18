import React, { Component } from 'react';
import styled from 'styled-components';

class AddNote extends Component {
  render() {
    return (
      <NoteInput placeholder='Add a note to your order'></NoteInput>
    );
  }
}

export default AddNote;

const NoteInput = styled.input`
  width:  100%;
  background-color: #f5f5f5;
  border-bottom: 1px solid ${props => props.theme.secondary};
  padding: 10px 0;
  &::placeholder {
      ${props => props.theme.mainFont({})}
      color: ${props => props.theme.main};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 18px;
  }
`
