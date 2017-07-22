import React from 'react';
import styled from 'styled-components';

import { text, images } from './data';
import Header from './Header';
import TextBanner from './TextBanner';
import ImageBanner from './ImageBanner';

const Home = props => (
  <main>
    <Header />
    <TextBanner title={ text[0].title } text={ text[0].text } />
    <ImageBanner url={ images.testimonial } />
    <TextBanner title={ text[1].title } text={ text[1].text } />
    <ImageBanner url={ images.following } />
    <TextBanner title={ text[2].title } text={ text[2].text } />
    <ImageBanner url={ images.craft } />
    <TextBanner title={ text[3].title } text={ text[3].text } />
    <ImageBanner url={ images.enterNow } minHeight={175} y={-170} />
    <Footer />
  </main>
)
const Footer = styled.footer`
  background-color: ${props => props.theme.secondary};
  width: 100%;
  height: 100px;
`
export default Home
