import React, { Component } from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { gql, withApollo } from 'react-apollo';

import search from './../../../assets/search.svg'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' }
    this.handleChange = this.handleChange.bind(this);
    this._executeSearch = this._executeSearch.bind(this);
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
        <Container>
          <SearchBar
          placeholder='Search Store'
          onChange={this.handleChange}
          value={searchText}
          />
          <SearchIcon 
          path={search} 
          callback={ (svg) => svg.addEventListener("click", this._executeSearch) }
          />
        </Container>
    )
  }
}

const ALL_KNIVES_SEARCH_QUERY = gql`
  query AllKnivesSearchQuery($searchText: String) {
    items(name:$searchText) {
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

const Container = styled.section`
  display: flex;
`
const SearchBar = styled.input`
  height: 30px;
  width: 30vw;
  border: solid #95989A 1px;
  border-radius: 15px 0 0 15px;
  padding-left: 20px;
  font-size: 15pt;
  color: #959595
`
const SearchIcon = styled(ReactSVG)`
  stroke: white;
  background: ${props => props.theme.secondary };
  height: 30px;
  border-radius: 0 15px 15px 0;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background: #292525;
  }
`
