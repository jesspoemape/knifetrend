import React from 'react';
import styled from 'styled-components';

import CarouselContainer from './CarouselContainer';

const Carousel = ({ testimonials }) => {
  return (
    <CarouselContainer>
    {
      testimonials.map(({ url, name, quote, location }) => (
        <Section key={ name }>
          <ProfileImg src={ url } />
          <Quote>"{ quote }"</Quote>
          <UserInfo>
            <em>{ name }</em>
            <em>|</em>
            { location }
          </UserInfo>
        </Section>
      ))
    }
  </CarouselContainer>
  )
}

const Section = styled.section`
  padding: 40px 10px;
  color: white;
  ${props => props.theme.media.desktop} {
    padding: 40px 100px;
  }
  ${props => props.theme.media.xl} {
    padding: 40px 150px;
  }
`
const ProfileImg = styled.img`
  width: 90px;
  height: auto;
  border-radius: 90px;
  margin: 0 auto;

`
const Quote = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  margin: 20px auto;
  max-width: 80%;
`
const UserInfo = styled.div`
  text-align: center;
  & em {
    font-weight: 600;
    margin-right: 10px;
  }
`

export default Carousel;
