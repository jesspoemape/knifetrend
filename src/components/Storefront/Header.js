import React from 'react';
import styled from 'styled-components';

const Header = ({ storeName, coverPhoto, profilePhoto }) => {
  return (
    <Container>
      <CoverPhoto url={ coverPhoto }>
        <StoreName>
          { storeName }
        </StoreName>
      </CoverPhoto>
      <ProfilePic src={ profilePhoto } alt='Profile Picture'/>
    </Container>
  )
}

export default Header;

const mobileProfileSize = 150;
const desktopProfileSize = 200;

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`
const CoverPhoto = styled.div`
  background: url('${props => props.url}') no-repeat center center ;
  background-size: auto;
  width: 100%;
  height: 200px;
  ${props => props.theme.media.tablet} {
    background-size: cover;
    height: 250px;
  }
`
const StoreName = styled.h1`
  ${props => props.theme.secondaryFont({})};
  font-size: 28pt;
  letter-spacing: 1pt;
  color: white;
  text-align: center;
  margin-top: 70px;
  ${props => props.theme.media.tablet}{
    font-size: 36pt;
  }
`
const ProfilePic = styled.img`
  border: #f5f5f5 4px solid;
  border-radius: 50%;
  width: ${mobileProfileSize}px;
  height: ${mobileProfileSize}px;
  margin-top: -${mobileProfileSize/2}px;
  ${props => props.theme.media.tablet}{
    width: ${desktopProfileSize}px;
    height: ${desktopProfileSize}px;
    margin-top: -${desktopProfileSize/2}px;
  }
`
