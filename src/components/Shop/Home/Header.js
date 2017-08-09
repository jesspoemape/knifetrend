import React from 'react';
import styled from 'styled-components';

const imgUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/Shop/Marketplace+Header.jpg';

const Header = () => (
  <Section url={ imgUrl }>
    <Title>Welcome to Knife Trend Marketplace.</Title>
    <Subtitle>Shop through hundreds of knives from the best knife makers in the world!</Subtitle>
  </Section>
)

const Section = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('${props => props.url}') no-repeat center center ;
  background-size: auto;
  height: 300px;
  ${props => props.theme.media.desktop} {
    height: 490px;
    background-size: cover;
  }
  ${props => props.theme.media.xl} {
    background-size: cover;
  }
`
const Title = styled.h1`
  ${props => props.theme.secondaryFont({})}
  color: white;
  font-size: 40pt;
  line-height: 42pt;
  text-align: center;
  ${props => props.theme.media.desktop} {
    font-size: 60pt;
  }
`

const Subtitle = styled.h3`
  ${props => props.theme.mainFont({})}
  color: white;
  font-weight: 200;
  font-size: 18pt;
  text-align: center;
  margin: 15px;
  line-height: 22pt;
  ${props => props.theme.media.desktop} {
    font-size: 24pt;
    margin: 40px;
  }
`

export default Header;
