import React from 'react';
import styled from 'styled-components';

import MinimalButton from 'kt-components/MinimalButton';
import instagram from './../../assets/instagram.png'

const authLink = `${process.env.REACT_APP_SERVER_URL}/auth`;

const Header = props => (
  <Container>
    <Title>Knife design competitions for the world’s greatest knife makers.</Title>
    <LoginLink href={ authLink }>
      <RedButton>
        Sign Up With
        <InstagramLogo />
      </RedButton>
    </LoginLink>
  </Container>
)
const Container = styled.header`
  background: url('https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-header.jpg') no-repeat center center;
  background-size: cover;
  padding: 60px 0px;
  text-align: center;
  ${props => props.theme.media.desktop} {
    padding: 60px 100px;
  }
`
const Title = styled.h1`
  ${props => props.theme.secondaryFont({})};
  font-size: 38pt;
  line-height: 45pt;
  color: white;
  padding: 20px 40px 40px 40px;
  ${props => props.theme.media.desktop} {
    font-size: 60pt;
    line-height: 68pt;
  }
`

const LoginLink = styled.a`
  text-decoration: none;
`

const RedButton = MinimalButton.extend`
  background-color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  border-radius: 50px;
  color: white;
  margin: 8px auto;
  padding: 10px 20px;
  font-size: 16px;
  flex-wrap: wrap;
  ${props => props.theme.media.desktop} {
    font-size: 22px;
    margin: 12px auto;
    padding: 15px 30px;
  }
`
const InstagramLogo = styled.img.attrs({
  src: instagram,
  alt: "Instagram"
})`
  height: 22px;
  padding-left: 10px;
  ${props => props.theme.media.desktop} {
    height: 30px;
  }
`

export default Header
