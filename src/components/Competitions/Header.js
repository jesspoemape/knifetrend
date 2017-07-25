import React from 'react';
import styled from 'styled-components';

const Header = ({ imgUrl, title }) => (
  <Section url={ imgUrl }>
    <Title>{ title }</Title>
  </Section>
)

const Section = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('${props => props.url}') no-repeat center center ;
  background-size: auto;
  height: 100px;
  ${props => props.theme.media.desktop} {
    height: 150px;
  }
  ${props => props.theme.media.xl} {
    background-size: cover;
  }
`
const Title = styled.h1`
  ${props => props.theme.secondaryFont({})}
  color: white;
  font-size: 40pt;
  line-height: 96pt;
  text-align: center;
  ${props => props.theme.media.desktop} {
    font-size: 50pt;
  }
`
export default Header;
