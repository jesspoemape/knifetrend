import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import MinimalButton from 'kt-components/MinimalButton'
import ImageBanner from 'kt-components/ImageBanner';
import RightArrow from './../../../assets/chevron-right.svg'

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
        </Section>
    )
}

export default PreOrderContainer;

const Section = styled.div`
    background: url('https://s3-us-west-2.amazonaws.com/knifetrend-assets/pre-order-knife.png') no-repeat center center;       
    background-position-y: -60px;
    height: 510px;
    display: flex;
    flex-direction: column;
    background-size: cover;
    width: 100%;
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

