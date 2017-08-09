import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import ImageBanner from 'kt-components/ImageBanner';
import search from './../../../assets/search.svg'

const imgUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-testimonial.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({userInput: event.target.value})
  }
  render() {
    const { userInput } = this.state
    return (
      <SearchBanner url={ imgUrl }>
        <SearchBar
          placeholder='Search Here'
          onChange={this.handleChange}
          value={userInput}
        />
        <SearchIcon path={search} />
      </SearchBanner>
    )
  }
}

export default Search;

const SearchBanner = styled(ImageBanner)`
  height: 125px;
  padding: 20px;
  ${props => props.theme.media.desktop} {
    height: 150px;
  }
`
const SearchBar = styled.input`
  height: 50px;
  width: 500px;
  border: solid #95989A 1px;
  border-radius: 15px 0 0 15px;
  padding-left: 20px;
  font-size: 18pt;
  color: #959595
`
const SearchIcon = styled(ReactSVG)`
  stroke: white;
  background: ${props => props.theme.secondary };
  height: 50px;
  border-radius: 0 15px 15px 0;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: #292525;
  }
`
