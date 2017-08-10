import React from 'react';
import styled from 'styled-components';

import Search from './Search';
import Divider from 'kt-components/Divider';
import MinimalButton from 'kt-components/MinimalButton';
import MakerCarousel from './MakerCarousel';

const MakersContainer = props => {
    return(
        <Section>
            <Header>A Community of Craftsmen</Header>
            <Desc>The Knife Trend community is made of of hundreds of highly skilled craftsmen from all over the world. Browse through our library of knife makers and follow your favorites to see their latest work!</Desc>
            <Divider width={70} />
            <Search/>
            <BrowseButton>Browse All Makers</BrowseButton>
            <MakerCarousel/>
        </Section>
    )
}

export default MakersContainer;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header = styled.header`
    ${props => props.theme.secondaryFont({})};
    height: 100px;
    background: ${props => props.theme.main};
    width: 100%;
    color: white;
    font-size: 39pt;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Desc = styled.div`
${props => props.theme.mainFont({})};
    background-color: white;
    display: flex;
    justify-content: center;
    font-size: 19pt;
    text-align: center;
    font-weight: 200;
    padding: 30px 150px;
    line-height: 32pt;
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

