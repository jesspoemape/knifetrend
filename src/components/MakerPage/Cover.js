import React from 'react';
import styled from 'styled-components'

import ImageBanner from 'kt-components/ImageBanner';


const imgUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/Shop/Marketplace+Header.jpg';
const profileUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/ProfilePic.png'

const Cover = () => {
    return (
       <Header url={ imgUrl }>
           <Title>Isabell Custom Knives</Title>
           <ProfilePic src={profileUrl} alt='Profile Picture'/>
       </Header>
    );
};

export default Cover;

const Header = styled(ImageBanner)`
    flex-direction: column;
    height: 200px;
    justify-content: flex-start;
    ${props => props.theme.media.tablet}{
        height: 250px;
        background-size: cover;
    }
`
const Title = styled.h1`
    ${props => props.theme.secondaryFont({})};
    font-size: 35pt;
    color: white;
    line-spacing: 1.5pt;
    margin-top: 30px;
    text-align: center;
    ${props => props.theme.media.tablet}{
        font-size: 60pt;
    }
`
const ProfilePic = styled.img`
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: white 4px solid;
    position: absolute;
    top: 165px;
    ${props => props.theme.media.tablet}{
        width: 225px;
        height: 225px;
        top: 205px;
    }
`