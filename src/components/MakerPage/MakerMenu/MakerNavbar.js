import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MakerNavbar = () => {
    return (
        <Container>
            <MakerLink exact={true} to='/makers'>Storefront</MakerLink>
            <Divider/>
            <MakerLink to='#'>Biography</MakerLink>
            <Divider/>
            <MakerLink to='#'>About the Shop</MakerLink>
            <Divider/>
            <MakerLink to='/makers/competition'>Competition</MakerLink>
            <Divider/>
        </Container>
    );
};

export default MakerNavbar;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const MakerLink = styled(NavLink).attrs({
    activeClassName: 'navLinkActive'
  })`
    ${props => props.theme.mainFont({})};
    color: #606060;
    font-size: 18pt;
    font-weight: 600;
    background: #e0e0e0;
    border-left: 5px solid #404040;
    text-transform: uppercase;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.navLinkActive {
        border-left: 5px solid ${props => props.theme.main};
    }
`
const Divider = styled.div`
    background: #f5f5f5;
    height: 2px;
    width: 100%;
`