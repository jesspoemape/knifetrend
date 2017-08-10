import React from 'react';
import styled from 'styled-components'

const imgURL = 'https://scontent.cdninstagram.com/t51.2885-19/11272883_487814924721110_310600987_a.jpg';

const ItemTile = (props) => {
    return (
        <div>
            <Tile>
                <Header>
                    <ProfileImage src={imgURL} />
                    Isabell Custom Knives
                </Header>
                <KnifeImage/>
                <Name>6" Folding bushcrafter</Name>
                <Price>$299.00</Price>
            </Tile>
        </div>
    );
};

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
    background: url('https://s3-us-west-2.amazonaws.com/knifetrend-assets/knives/knife-10.jpg');
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