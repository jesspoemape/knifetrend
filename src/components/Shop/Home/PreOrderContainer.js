import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import MinimalButton from 'kt-components/MinimalButton'
import ImageBanner from 'kt-components/ImageBanner';
import RightArrow from './../../../assets/chevron-right.svg'

const imageURL = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/pre-order-knife.png'

const PreOrderContainer = () => {
    return (
        <Section>
            <Header>
                Pre-Order Production Run Knives!
                <PreOrderButton> 
                    Shop All Pre Order Knives
                    <Arrow path={RightArrow} />
                </PreOrderButton>
            </Header>
            <Knife url={ imageURL }/>
        </Section>
    )
}

export default PreOrderContainer;

const Section = styled.div`
`

const Header = styled.header`
    background: ${props => props.theme.main};
    height: 100px;
    width: 100%;
    ${props => props.theme.secondaryFont({})};
    color: white;
    font-size: 39pt;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${props => props.theme.media.tablet}{
        flex-direction: row;
    }

`

const PreOrderButton = styled(MinimalButton)`
    height: 50px;
    width: 330px;
    border: solid 1px white;
    margin-left: 40px;
    border-radius: 50px;
    padding: 0px;
    justify-content: center;
    letter-spacing: 1pt;
    font-size: 10pt;
    font-weight: 200;
`

const Arrow = styled(ReactSVG)`
    stroke: white;
    fill: white;
    height: 35px;
    margin-top: 3px;
`

const Knife = styled(ImageBanner)`  
    height: 410px;
`
