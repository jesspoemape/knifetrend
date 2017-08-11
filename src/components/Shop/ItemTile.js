import React from 'react';
import styled from 'styled-components';
import { gql } from 'react-apollo';

const ItemTile = ({maker: {profilePhoto, storeName}, primaryPhoto, name, price}) => {
    return (
        <div>
            <Tile>
                <Header>
                    <ProfileImage src={profilePhoto} />
                    {storeName}
                </Header>
                <KnifeImage url={primaryPhoto}/>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Tile>
        </div>
    );
};

ItemTile.fragment = gql`
  fragment ItemTile on Item {
    maker {
      profilePhoto
      storeName
    }
    id
    primaryPhoto
    name
    price
  }
`

export default ItemTile;

const Tile = styled.div`
    height: 394px;
    width: 272px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
    margin: 40px 10px 60px 10px;
`
const Header = styled.header`
    height: 60px;
    width: 100%;
    ${props => props.theme.mainFont({})};
    text-transform: uppercase;
    display: flex;
    justfiy-content: flex-start;
    align-items: center;
    font-size: 12pt;
    font-weight: 700;
    padding: 10px;
`
const ProfileImage = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
`
const KnifeImage = styled.div`
    background: url(${props => props.url});
    background-size: cover;
    background-position: center;
    height: 272px;
    width: 100%;
`
const Name = styled.p`
    padding: 14px 10px 0px 10px;
    ${props => props.theme.mainFont({})};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12pt;
`
const Price = styled.p`
    ${props => props.theme.mainFont({})};
    font-weight: 700;
    font-size: 16pt;
    color: ${props => props.theme.main};
    padding: 3px 0 0 10px;
`
