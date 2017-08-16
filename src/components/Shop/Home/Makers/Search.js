import React, {Component} from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import { gql, withApollo } from 'react-apollo';

import search from './../../../../assets/search.svg'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {searchText: ''};
        this.handleChange = this.handleChange.bind(this);
        this._executeSearch = this._executeSearch.bind(this);
    }
    handleChange(event) {
        this.setState({searchText: event.target.value})
    }
    _executeSearch = async () => {
    const { searchText } = this.state;
    const result = await this.props.client.query({
      query: ALL_MAKERS_SEARCH_QUERY,
      variables: { searchText }
    })
    console.log('Give me knives', result.data)
  }
    render() {
        const { searchText } = this.state
        return(
            <SearchBar>
                <SearchBarInput placeholder='Find A Knife Maker'
                                onChange={this.handleChange}
                                value={searchText}
                />
                <SearchIcon 
                    path={search}
                    callback={ (svg) => svg.addEventListener("click", this._executeSearch) } 
                />
            </SearchBar>
        )
    }
}

const ALL_MAKERS_SEARCH_QUERY = gql`
  query AllMakersSearchQuery($searchText: String) {
    makers(storeName:$searchText) {
      id
      coverPhoto
      profilePhoto
      storeName
      location
      items(limit:3) {
          primaryPhoto
      }
    }
  }
`

export default withApollo(Search);

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background-size: auto;
    background: white;
    width: 100%;
`

const SearchBarInput = styled.input`
    ${props => props.theme.mainFont({})};
    max-width: 500px;
    height: 50px;
    border: 1px solid #95989A;
    border-radius: 15px 0 0 15px;
    padding: 10px 20px;
    font-size: 18pt;
    ${props => props.theme.media.desktop} {
      width: 500px;
    }
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
