import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg'

import plus from './../../../assets/plus.svg'

export default props => (
  <Container>
    <AddButtonIcon path={plus} />
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid #d9d9d9;
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
    & svg {
      stroke: white;
    }
  }
`
const AddButtonIcon = styled(ReactSVG)`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #d9d9d9;
  width: 45px;
  height: 45px;
  cursor: pointer;
`
