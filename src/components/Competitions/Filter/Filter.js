import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import onClickOutside from 'react-onclickoutside';
import MinimalButton from 'kt-components/MinimalButton';
import { withRouter } from 'react-router-dom';

import chevronDown from './../../../assets/chevron-down.svg';
import chevronUp from './../../../assets/chevron-up.svg';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showOptions: false,
      filter: ''
    }

    this.toggleFilterCard = this.toggleFilterCard.bind(this);
    this.selectFilter = this.selectFilter.bind(this);
  }

  toggleFilterCard() {
    this.setState({ showOptions: !this.state.showOptions })
  }

  selectFilter(event) {
    this.setState({
      showOptions: false,
      filter: `${event.target.value} first`
    })
  }

  handleClickOutside(evt) {
    this.setState({ showOptions: false })
  }
  render() {

    const{ showOptions, filter } = this.state;
    return (
      <Container>
        <Select>
          <Option onClick={ this.selectFilter }>Newest</Option>
          <Option onClick={ this.selectFilter }>Oldest</Option>
        </Select>
    </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`
const Select = styled.select`
  border-color: #8D8D8D;
  color: #8D8D8D;
`
const SVG = styled(ReactSVG)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  stroke: #8D8D8D;
`
const FilterCard = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,.4);
  top: 40px;
  width: 100%;
  padding: 5px 0px;
  z-index: 1000;
`
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

export default withRouter(onClickOutside(Filter));
