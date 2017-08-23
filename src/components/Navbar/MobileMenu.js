import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SVG from 'kt-components/SVG';

import exitIcon from './../../assets/exit.svg';

const MobileMenu =  ({ toggleDisplay }) => {
  return (
    <MenuContainer>
      <Exit path={ exitIcon } onClick={ toggleDisplay } />
      <MenuList>
        <NavLink onClick={ toggleDisplay } to="/">Home</NavLink>
        <NavLink onClick={ toggleDisplay } to="/competitions">Competitions</NavLink>
        <NavLink onClick={ toggleDisplay } to="/shop">Shop</NavLink>
        <NavLink onClick={ toggleDisplay } to="#">Login</NavLink>
      </MenuList>
    </MenuContainer>
  )
}

MobileMenu.propTypes = {
  toggleDisplay: PropTypes.func
}

const MenuContainer = styled.div`
  background: ${({theme}) => theme.secondary};
  color: #fff;
  padding: 13px;
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  position: absolute;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  z-index: 1000;
`
const Exit = styled(SVG)`
  text-align: right;
  stroke: white;
  width: 38px;
  height: 38px;
  float: right;
`
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  clear: both;
`
const NavLink = styled(Link)`
  text-align: center;
  width: 80%;
  padding: 20px;
  border-top-style: solid;
  border-width: thin;
  border-color: #95989A;
  ${({theme}) => theme.mainFont({color:'white'})}
  font-size: 20px;
  text-transform: uppercase;
  &:first-of-type {
    border-top: none;
  }
`

export default MobileMenu
