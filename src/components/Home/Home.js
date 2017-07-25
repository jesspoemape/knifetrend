import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import TextBanner from './TextBanner';
import ImageBanner from './ImageBanner';
import Carousel from './Carousel/Carousel';

import { text, images, testimonials } from './data';

const Home = props => (
  <main>
    <Header />
    <TextBanner title={ text[0].title } text={ text[0].text } />
    <ImageBanner url={ images.testimonial }>
      <Carousel testimonials={ testimonials } />
    </ImageBanner>
    <TextBanner title={ text[1].title } text={ text[1].text } />
    <ImageBanner url={ images.following } />
    <TextBanner title={ text[2].title } text={ text[2].text } />
    <ImageBanner url={ images.craft } />
    <TextBanner title={ text[3].title } text={ text[3].text } />
    <EnterNowBanner url={ images.enterNow } height={ 200 }>
      <EnterNowButton>Enter Now</EnterNowButton>
    </EnterNowBanner>
  </main>
)

const EnterNowBanner = ImageBanner.extend`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const EnterNowButton = styled.button`
  background: transparent;
  border: solid white thin;
  border-radius: 40px;
  color: white;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 200;
  padding: 10px 30px;
  margin: 0 auto;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.main};
    border-color: ${props => props.theme.main};
  }
`

export default Home
