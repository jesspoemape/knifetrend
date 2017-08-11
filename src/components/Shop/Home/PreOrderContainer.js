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
    ${props => props.theme.secondaryFont({})};
    height: 100px;
    background: ${props => props.theme.main};
    width: 100%;
    color: white;
    font-size: 28pt;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    ${props => props.theme.media.desktop} {
      font-size: 39pt;
      flex-direction: row;
    }
`

const PreOrderButton = styled(MinimalButton)`
    border: solid 1px white;
    border-radius: 50px;
    justify-content: center;
    letter-spacing: 1pt;
    font-size: 10pt;
    font-weight: 200;
    padding: 0 20px;
    margin-top: 13px;
    ${props => props.theme.media.desktop} {
      flex-direction: row;
      margin: 15px 40px;
    }
`

const Arrow = styled(ReactSVG)`
    stroke: white;
    margin-top: 3px;
    ${props => props.theme.media.desktop} {
      height: 35px;
    }
`

const Knife = styled(ImageBanner)`
    height: 280px;
    background-size:cover;
    ${props => props.theme.media.desktop} {
      height: 350px;
    }
`
