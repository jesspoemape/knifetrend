import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MobileNav = ({toggleDisplay}) => {
  return (
    <Container>
      <MenuLink onClick={toggleDisplay} exact={true} to="/storefront/2">Storefront</MenuLink>
      <Divider/>
      <MenuLink onClick={toggleDisplay} to="/storefront/2/about">About The Shop</MenuLink>
      <Divider/>
      <MenuLink onClick={toggleDisplay} to="/storefront/2/entries">Competition Entries</MenuLink>
    </Container>
  )
}

export default MobileNav;

const Container = styled.section `
    position: absolute;
    height: 150px;
    width: 100%;
    top: 320px;
    background: #e0e0e0;
    color: #606060;
    display: flex;
    flex-direction: column;
    ${props => props.theme.media.phone}{
        top: 340px;
    }
    ${props => props.theme.media.tablet}{
        top: 415px;
    }
    ${props => props.theme.media.desktop}{
        display: none;
    }
`
const MenuLink = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
`
const Divider = styled.div `
    background: #f5f5f5;
    height: 2px;
    width: 100%;
`
