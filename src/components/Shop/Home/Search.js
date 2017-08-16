import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { gql, withApollo } from 'react-apollo';

import ImageBanner from 'kt-components/ImageBanner';
import search from './../../../assets/search.svg'

const imgUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-testimonial.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({searchText: event.target.value})
  }
  _executeSearch = async () => {
    const { searchText } = this.state;
    const result = await this.props.client.query({
      query: ALL_KNIVES_SEARCH_QUERY,
      variables: { searchText }
    })
    console.log('Give me knives', result.data)
  }
  render() {
    const { searchText } = this.state
    return (
      <SearchBanner url={ imgUrl }>
        <SearchBar
          placeholder='Search Here'
          onChange={this.handleChange}
          value={searchText}
        />
        <SearchIcon 
          path={search} 
          callback={ (svg) => svg.addEventListener("click", this._executeSearch()) }
        />
      </SearchBanner>
    )
  }
}

const ALL_KNIVES_SEARCH_QUERY = gql`
  query AllKnivesSearchQuery($searchText: String!) {
    items(filter: {
      OR: [{
        name_contains: $searchText
      }, {
        desc_contains: $searchText
      }]
    }) {
      maker {
        profilePhoto
        storeName
      }
      id
      primaryPhoto
      name
      desc
      price
    }
  }
`

export default withApollo(Search);

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
