import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';

const FeaturedKnivesContainer = () => {
    return (
        <Section>
            <Header>
                Featured Knives
            </Header>
            <Carousel/>
        </Section>
    );
};

export default FeaturedKnivesContainer;

const Section = styled.section`
    background: #F5F5F5;
`

const Header = styled.section`
    height: 120px;
    width: 100%;
    ${props => props.theme.secondaryFont({})}
    color: ${props => props.theme.main};
    font-weight: 400;
    font-size: 39pt;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: white;
`
