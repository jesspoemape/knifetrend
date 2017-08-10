import React, {Component} from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import search from './../../../../assets/search.svg'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {userInput: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({userInput: event.target.value})
    }
    render() {
        const { userInput } = this.state
        return(
            <SearchBar>
                <SearchBarInput placeholder='Find A Knife Maker'
                                onChange={this.handleChange}
                                value={userInput}
                />
                <SearchIcon path={search} />
            </SearchBar>
        )
    }
}

export default Search;

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

const SearchBarInput = styled.input`
${props => props.theme.mainFont({})};
    width: 500px;
    height: 50px;
    border: 1px solid #95989A;
    border-radius: 15px 0 0 15px;
    padding: 10px 20px;
    font-size: 18pt; 
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
