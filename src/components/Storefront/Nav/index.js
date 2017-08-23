import React, { Component } from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import Nav from './Nav';
import MobileNav from './MobileNav';

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        displayNav: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({
        displayNav: !this.state.displayNav
      })
  }
  render(){
    const { displayNav } = this.state
    return (
      <Container>

        <Media query="(min-width: 950px)" render={()=>(
          <Nav />
        )}/>

        <Media query="(max-width: 950px)" render={()=>(
          <MobileNav
            displayNav={displayNav}
            toggleDisplay={this.toggleDisplay}
          />
        )}/>

      </Container>
    )
  }
}

export default NavContainer;

const Container = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: -75px;
  margin-bottom: 30px;
  ${props => props.theme.media.tablet} {
    margin-top: -100px;
    margin-bottom: 55px;
  }
  ${props => props.theme.media.desktop} {
    margin-bottom: 0px;
  }
`
