import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import withViewer from 'kt-hocs/withViewer'

import profile from './../../assets/profile.svg';

const Login = ({ viewer }) => {
  const authLink = `${process.env.REACT_APP_SERVER_URL}/auth`;

  if(viewer) {
    return (
      <ProfileLink to="/profile">
        <ProfileImg src={ viewer.avatar } />
      </ProfileLink>
    )
  } else {
    return (
      <MenuList>
        <LoginLink href={ authLink }>
          <ProfileIcon path={ profile } />
          Login
        </LoginLink>
        <SignUpLink href={ authLink }>Sign Up</SignUpLink>
      </MenuList>
    )
  }
}

export default withViewer(Login)

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: auto;
`

const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const LoginLink = styled.a`
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
const ProfileLink = LoginLink.withComponent(NavLink);

const SignUpLink = LoginLink.extend`
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
