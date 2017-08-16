import React from 'react';
import styled from 'styled-components';

import Facebook from './../../../assets/facebook-logo.png';
import Instagram from './../../../assets/instagram-logo.png';
import Twitter from './../../../assets/twitter-logo.png';
import KnifeTrend from './../../../assets/KnifeTrendSocial.png';

const link = "#"
const MakerDetails = () => {
    return (
        <Container>
            <Title>Follow</Title>
            <Images>
                <a target="_blank"href={link}><ImgBubble src={KnifeTrend} alt='KnifeTrend Social'/></a>
                <a target="_blank"href={link}><ImgBubble src={Instagram} alt='Instagram Social'/></a>
                <a target="_blank"href={link}><ImgBubble src={Facebook} alt='Facebook Social'/></a>
                <a target="_blank"href={link}><ImgBubble src={Twitter} alt='Twitter Social'/></a>
            </Images>
            <DotDivider><Dot/><Dot/><Dot/></DotDivider>
            <Title>Member Since</Title>
            <Desc>August 10th, 2017</Desc>
            <DotDivider><Dot/><Dot/><Dot/></DotDivider>
            <Title>Knives Sold</Title>
            <Desc>289</Desc>
            <DotDivider><Dot/><Dot/><Dot/></DotDivider>
            <Title>Competitions Entered</Title>
            <Desc>678</Desc>
        </Container>
    );
};

export default MakerDetails;

const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: #404040;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 25px;
    box-shadow: inset 0px -11px 38px -16px black;
`

const Title = styled.h2`
    ${props => props.theme.mainFont({})};
    color: #989898;
    font-size: 18pt;
    font-weight: 400;
    margin-top: 25px;
`
const Desc = styled.h1`
    ${props => props.theme.mainFont({})};
    color: #e0e0e0;
    font-size: 22pt;
    font-weight: 400;
    margin-top: 3px;
`
const Images = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    margin-top: 15px;
`
const ImgBubble = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0px 8px;
`

const DotDivider = styled.div`
    display: flex;
    margin-top: 20px;
`
const Dot = styled.div`
    height: 5px;
    width 5px;
    background: #989898;
    border-radius: 50%;
    margin: 0px 8px;
`