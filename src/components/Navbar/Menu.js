import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login';

const Menu = props =>
  <MenuContainer>
    <MenuList>
      <MenuLink exact={true} to="/">Home</MenuLink>
      <MenuLink to="/competitions">Competitions</MenuLink>
      <MenuLink to="/shop">Shop</MenuLink>
    </MenuList>
    <Login />
  </MenuContainer>


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
  cursor: pointer;
  &.navLinkActive {
    background: ${({theme}) => theme.secondary}
  }
  &:hover {
    background: #B20E0D;
    color: white;
  }
`

export default Menu
