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
    font-size: 20pt;
    color: white;
    letter-spacing: 1.5pt;
    margin-top: 60px;
    text-align: center;
    ${props => props.theme.media.phone}{
        font-size: 40pt;
        font-size: 35pt;
    }
`
const ProfilePic = styled.img`
    position: absolute;
    border-radius: 50%;
    margin-top: 145px;
    width: 150px;
    height: 150px;
    border: white 4px solid;
    z-index: 2;
    ${props => props.theme.media.tablet}{
        width: 200px;
        height: 200px;
    }
`