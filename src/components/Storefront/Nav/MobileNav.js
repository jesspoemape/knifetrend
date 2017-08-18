import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import chevronDown from '../../../assets/chevron-down.svg';

const MobileNav = ({toggleDisplay, displayNav, match}) => {
  const { makerId } = match.params
  return (
    <div>
      <MobileMenuButton
        path={chevronDown}
        callback={ (svg) => svg.addEventListener("click", toggleDisplay) }
      />
      {displayNav?
      <MenuList>
        <MenuLink onClick={toggleDisplay} exact={true} to={`/storefront/${makerId}`}>Storefront</MenuLink>
        <MenuLink onClick={toggleDisplay} to={`/storefront/${makerId}/about`}>About The Shop</MenuLink>
        <MenuLink onClick={toggleDisplay} to={`/storefront/${makerId}/entries`}>Competition Entries</MenuLink>
      </MenuList>
      : null}
    </div>
  )
}

export default withRouter(MobileNav);

const MobileMenuButton = styled(ReactSVG)`
  stroke: #606060;
  margin: 10px;
  cursor: pointer;
`
const MenuList = styled.nav`
  position: absolute;
  right: 0;
  width: 200px;
  background: #e0e0e0;
  color: #606060;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.shadow}
`
const MenuLink = styled(NavLink).attrs({
  activeClassName: 'navLinkActive'
  })`
  ${props => props.theme.mainFont({})};
  color: #606060;
  font-size: 12pt;
  font-weight: 600;
  background: #e0e0e0;
  border-right: 5px solid #404040;
  border-bottom: .5px solid #ababab;
  text-transform: uppercase;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.navLinkActive {
      border-right: 5px solid ${props => props.theme.main};
      background: #f5f5f5;
  }
`
