import React from 'react';
import styled from 'styled-components';

import { MinimalButton } from 'shared-components';
import instagram from './../../assets/instagram.png'

const Header = props => (
  <Container>
    <Title>Knife design competitions for the world’s greatest knife makers.</Title>
    <RedButton>
      Sign Up With
      <InstagramLogo />
    </RedButton>
  </Container>
)
const Container = styled.header`
  background: url('https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-landing-header.jpg') no-repeat center center fixed;
  background-position-y: -110px;
  background-size: cover;
  padding: 80px 0px;
  text-align: center;
  ${props => props.theme.media.desktop} {
    padding: 80px 100px;
  }
`
const Title = styled.h1`
  ${props => props.theme.secondaryFont({})}
  font-size: 50px;
  color: white;
  padding: 40px;
  ${props => props.theme.media.desktop} {
    font-size: 70px;
  }
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
