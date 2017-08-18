import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import MakerDetails from './MakerDetails';

const Nav = ({ match }) => {
  const { makerId } = match.params
  return (
    <Container>
      <MakerLink exact={true} to={`/storefront/${makerId}`}>Storefront</MakerLink>
      <MakerLink to={`/storefront/${makerId}/about`}>About the Shop</MakerLink>
      <MakerLink to={`/storefront/${makerId}/entries`}>Competition Entries</MakerLink>
      <MakerDetails />
    </Container>
  )
}

export default withRouter(Nav);

const Container = styled.nav`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 225px;
`
const MakerLink = styled(NavLink).attrs({
  activeClassName: 'navLinkActive'
  })`
  ${props => props.theme.mainFont({})};
  color: #606060;
  font-size: 12pt;
  font-weight: 600;
  background: #e0e0e0;
  border-left: 5px solid #404040;
  border-bottom: .5px solid #ababab;
  text-transform: uppercase;
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.navLinkActive {
    border-left: 5px solid ${props => props.theme.main};
    background: #f5f5f5;
    height: 100px;
  }
`
