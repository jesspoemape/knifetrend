import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import styled from 'styled-components';

import logo from './../../assets/knifetrend-logo.png';
import menu from './../../assets/menu.svg';
import chevronLeft from './../../assets/chevron-left.svg';

import Menu from './Menu'
import MobileMenu from './MobileMenu';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }
  render() {
    return (
      <Nav>
        <BackButton
          path={ chevronLeft }
          callback={ (svg) => svg.addEventListener("click", this.props.history.goBack) }
        />
        <Logo src={ logo } alt="KnifeTrend Logo" />
        <Menu toggleDisplay={ this.toggleDisplay } />
        <MobileMenuButton
          path={ menu }
          callback={ (svg) => svg.addEventListener("click", this.toggleDisplay) }
        />
        { this.state.displayMenu ? <MobileMenu toggleDisplay={ this.toggleDisplay } /> : null }

      </Nav>
    )
  }
}

const Nav = styled.nav`
  background: ${props => props.theme.main};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme.media.tablet} {
    height: 70px;
  }
  ${props => props.theme.media.desktop} {
    padding: 0 100px;
    height: 70px;
  }
`
const Logo = styled.img`
  height: 30px;
  padding: 0px 10px;
`
const BackButton = styled(ReactSVG)`
  stroke: white;
  margin-left: 5px;
  ${props => props.theme.media.tablet} {
    display: none;
  }
`
const MobileMenuButton = styled(ReactSVG)`
  width: 30px;
  height: 40px;
  stroke: white;
  margin-right: 5px;
  ${props => props.theme.media.tablet} {
    display: none;
  }
`

export default Navbar
