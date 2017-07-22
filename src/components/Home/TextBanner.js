import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { Divider } from 'shared-components';

const TextBanner = ({ title, text }) => (
    <Section>
      <H2>{ title }</H2>
      <Divider width={50} />
      <P>{ text }</P>
    </Section>
)

TextBanner.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  ${props => props.theme.media.desktop} {
    padding: 20px 150px;
  }
`
const H2 = styled.h2`
  color: ${props => props.theme.main};
  text-transform: uppercase;
  font-size: 36px;
  text-align: center;
  padding: 20px;
`
const P = styled.p`
  ${props => props.theme.mainFont({})};
  font-size: 18px;
  padding: 20px 30px;
  text-align: center;
  ${props => props.theme.media.desktop} {
    max-width: 70%;
  }
`
export default TextBanner
