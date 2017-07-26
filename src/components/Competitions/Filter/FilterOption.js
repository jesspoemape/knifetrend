import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const FilterCard = ({ order, orderBy, display }) => (
  <Option>
    { display }
  </Option>
)

const Option = styled.option`
  color: ${props => props.theme.secondary};
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  &:hover {
    background: ${props => props.theme.secondary};
    color: white;
    cursor: pointer;
  }
`

export default withRouter(FilterCard);
