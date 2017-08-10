import React, {Component} from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import Divider from 'kt-components/Divider';
import MakerTile from './../../MakerTile';
import MinimalButton from 'kt-components/MinimalButton';
import search from './../../../../assets/search.svg'

class MakersContainer extends Component {
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
            <Section>
                <Header>A Community of Craftsmen</Header>
                <Desc>The Knife Trend community is made of of hundreds of highly skilled craftsmen from all over the world. Browse through our library of knife makers and follow your favorites to see their latest work!</Desc>
                <Divider width={70} />
                <SearchBar>
                    <SearchBarInput placeholder='Find A Knife Maker'
                                    onChange={this.handleChange}
                                    value={userInput}
                    />
                    <SearchIcon path={search} />
                </SearchBar>
                <BrowseButton>Browse All Makers</BrowseButton>
                <div style={{height: '570px', background: '#F5F5F5', width: '100%', padding: '30px', display: 'flex', justifyContent: 'space-around'}}>
                    <MakerTile />
                    <MakerTile />
                    <MakerTile />
                    <MakerTile />
                </div>   
            </Section>
        )
    }
}

export default MakersContainer;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.header`
    ${props => props.theme.secondaryFont({})};
    height: 100px;
    background: ${props => props.theme.main};
    width: 100%;
    color: white;
    font-size: 39pt;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Desc = styled.div`
${props => props.theme.mainFont({})};
    background-color: white;
    display: flex;
    justify-content: center;
    font-size: 19pt;
    text-align: center;
    font-weight: 200;
    padding: 30px 150px;
    line-height: 32pt;
`
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

const BrowseButton = styled(MinimalButton)`
${props => props.theme.mainFont({})}; 
  background: ${props => props.theme.main};
  color: white;
  padding: 10px 20px;
  font-weight: 200;
  font-size: 10pt;
  letter-spacing: 1pt;
  border: none;
  margin-bottom: 30px;
`
