import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Divider from 'kt-components/Divider';
import MinimalButton from 'kt-components/MinimalButton';
import MakerCarousel from './MakerCarousel';

const MakersContainer = props =>
  <Section>
    <Header>A Community of Craftsmen</Header>
    <Desc>
      The Knife Trend community is made of of hundreds of highly skilled
      craftsmen from all over the world. Browse through our library of knife makers
      and follow your favorites to see their latest work!
    </Desc>
    <Divider width={70} />
    <Search/>
    <ButtonWrapper>
        <BrowseButton>Browse All Makers</BrowseButton>
    </ButtonWrapper>
    <MakerCarousel/>
  </Section>

export default MakersContainer;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
`
const Header = styled.header`
    ${props => props.theme.secondaryFont({})};
    height: 80px;
    background: ${props => props.theme.main};
    width: 100%;
    color: white;
    font-size: 28pt;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.theme.media.desktop} {
      font-size: 39pt;
      height: 100px;
    }
`
const Desc = styled.div`
${props => props.theme.mainFont({})};
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16pt;
    text-align: center;
    font-weight: 200;
    padding: 30px;
    line-height: 26pt;
    ${props => props.theme.media.desktop} {
      padding: 30px 20%;
      line-height: 32pt;
      font-size: 19pt;
    }

`
const BrowseButton = styled(MinimalButton)`
    ${props => props.theme.mainFont({})};
    background: ${props => props.theme.main};
    color: white;
    padding: 10px 20px;
    font-weight: 200;
    font-size: 10pt;
    letter-spacing: 1pt;
    border: none;
    margin-bottom: 30px;
`

const ButtonWrapper = styled.div`
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`
