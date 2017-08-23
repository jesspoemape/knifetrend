import React from 'react';
import styled from 'styled-components';

import ItemsCarousel from './ItemsCarousel';

export default props =>
  <Section>
    <Header>Featured Knives</Header>
    <ItemsCarousel />
  </Section>


const Section = styled.section`
  background: #F5F5F5;
`
const Header = styled.section`
  height: 80px;
  width: 100%;
  ${props => props.theme.secondaryFont({})}
  color: ${props => props.theme.main};
  font-weight: 400;
  font-size: 28pt;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: white;
  ${props => props.theme.media.desktop} {
    font-size: 39pt;
    height: 120px;
  }
`
