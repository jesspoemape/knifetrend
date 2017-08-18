import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import Divider from 'kt-components/Divider';

const MakerTile = ({coverPhoto, profilePhoto, storeName, location, items }) => {

  const itemImages = [];
  const itemPlacholder = 'https://s3-us-west-2.amazonaws.com/knifetrend-assets/knifePlaceholder.png';
  for(let i = 0; i < 3; i++) {
    let image = items[i] ? items[i].primaryPhoto : itemPlacholder;
    itemImages.push(image);
  }

  return (
    <Tile>
      <CoverPhoto url={coverPhoto}/>
      <ProfilePhoto src={profilePhoto} />
      <StoreName>{storeName}</StoreName>
      <Location>{location}</Location>
      <TileDivider/>
      <KnivesContainer>
          { itemImages.map((image, i) => <Knife key={i} src={image} alt="knife" />) }
      </KnivesContainer>
      <Footer>View Storefront</Footer>
    </Tile>
  )
}

MakerTile.fragment = gql`
  fragment MakerTile on Maker {
    id
    coverPhoto
    profilePhoto
    storeName
    location
    items(limit:3) {
      id
      primaryPhoto
    }
  }
`

export default MakerTile;

const Tile = styled.div`
    background-color: white;
    width: 330px;
    height: 440px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 10px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
`
const CoverPhoto = styled.div`
    background: url('${props => props.url}') no-repeat center;
    width: 100%;
    height: 150px;
`

const StoreName = styled.h3`
    ${props => props.theme.mainFont({})};
    color: ${props => props.theme.main};
    font-weight: 700;
    font-size: 15pt;
    text-transform: uppercase;
    margin-top: 50px;
`

const ProfilePhoto = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: none;
    position: absolute;
    top: 30px;
    left: 85px;
`

const Location = styled.h4`
    ${props => props.theme.mainFont({})};
    color: #B5B5B5;
    font-weight: 300;
    font-size: 12pt;
    margin-top: 5px;
    margin-bottom: 15px;
`

const TileDivider = styled(Divider)`
    width: 45px;
    background: #b5b5b5;
`

const Footer = styled.footer`
    ${props => props.theme.mainFont({})}
    width: 100%;
    height: 60px;
    color: white;
    background-color: ${props => props.theme.main};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.5pt;
`
const KnivesContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

const Knife = styled.img`
    width: 33.1%;
`
