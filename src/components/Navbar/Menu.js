import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import PropTypes from 'prop-types';

import profile from './../../assets/profile.svg';

const Menu = props => {
  return (
    <MenuContainer>
      <MenuList>
        <MenuLink exact={true} to="/">Home</MenuLink>
        <MenuLink to="/competitions">Competitions</MenuLink>
        <MenuLink to="#">Shop</MenuLink>
        <MenuLink to="#">Makers</MenuLink>
      </MenuList>
      <MenuList>
        <MenuLink to="/profile">
          <ProfileIcon path={ profile } />
          Login
        </MenuLink>
        <SignUpLink to="/sign-up">Sign Up</SignUpLink>
      </MenuList>
    </MenuContainer>
  )
}

Menu.propTypes = {
  toggleDisplay: PropTypes.func
}

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const MenuContainer = MenuList.extend`
  width: 100%;
  display: none;
  ${props => props.theme.media.tablet} {
    display: flex;
  }
`
const MenuLink = styled(NavLink).attrs({
  activeClassName: 'navLinkActive'
})`
  text-align: center;
  padding: 0 15px;
  ${({theme}) => theme.mainFont({color:'white', weight: '800'})}
  font-size: 16px;
  letter-spacing: 1.2pt;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  &.navLinkActive {
    background: ${({theme}) => theme.secondary}
  }
  &:hover {
    background: #8D8D8D;
  }
`
const SignUpLink = MenuLink.extend`
  background: white;
  color: ${({theme}) => theme.main}
`
const ProfileIcon = styled(ReactSVG)`
  border: solid white;
  border-radius: 20px;
  margin: 5px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  background: white;
  & > path, circle {
    stroke: ${({theme}) => theme.main};
    fill: ${({theme}) => theme.main};
  }
`


export default Menu
