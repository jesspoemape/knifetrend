import React from 'react';
import styled from 'styled-components'

import ImageBanner from 'kt-components/ImageBanner';

const imgUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/Shop/Marketplace+Header.jpg';
const profileUrl = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/ProfilePic.png'

const Header = () => {
  return (
    <CoverPhoto url={ imgUrl }>
      <StoreName>
        Isabell Custom Knives
      </StoreName>
      <ProfilePic src={profileUrl} alt='Profile Picture'/>
    </CoverPhoto>
  )
}

export default Header;

const CoverPhoto = styled(ImageBanner)`
  flex-direction: column;
  height: 200px;
  justify-content: flex-start;
  ${props => props.theme.media.tablet}{
      height: 250px;
      background-size: cover;
  }
`
const StoreName = styled.h1`
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
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border: white 4px solid;
  ${props => props.theme.media.tablet}{
      margin-top: 30px;
      width: 200px;
      height: 200px;
  }
`
