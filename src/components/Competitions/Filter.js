import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg'
import { MinimalButton } from 'shared-components'

import chevronDown from './../../assets/chevron-down.svg';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state ={
      expanded: false
    }
  }
  render() {

    return (
      <Section>
        <Button>
          Oldest First
          <ChevronDown />
        </Button>
        <FilterCard />
      </Section>
    )
  }
}

const Section = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: ${props => props.theme.shadow};
`
const Button = styled(MinimalButton)`
  border-color: #8D8D8D;
  color: #8D8D8D;
`
const ChevronDown = styled(ReactSVG).attrs({
  path: chevronDown
})`
  display: flex;
  justify-content: space-around;
  align-items: center;
  stroke: #8D8D8D;
`
const FilterCard = styled.div`
  background: white;
  color: #fff;
  padding: 13px;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  position: absolute;
  margin-top: 30px;
  width: 300px;
  z-index: 1000;
`

export default Filter;
