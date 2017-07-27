import React from 'react';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

import { MinimalButton } from 'shared-components';

import check from './../../../assets/check.svg';
import share from './../../../assets/share.svg';
import tag from './../../../assets/tag.svg';

const EntryTile = ({ id, name, imgUrl, user }) => {
  return (
    <Tile>
      <TileHeader>
        <ProfileImg src={ user.avatar } />
        <DesignerName>{ user.name }</DesignerName>
      </TileHeader>
      <ProductImg src={ imgUrl } />
      <TileFooter>
        <ProductName>{ name }</ProductName>
        <Votes>
          300 <p>votes</p>
        </Votes>
        <ButtonGroup>
          <Button>Vote <Icon path={ check } /></Button>
          <Button>Share <Icon path={ share } /></Button>
          <Button>Pre-Order <Icon path={ tag } /></Button>
        </ButtonGroup>
    </TileFooter>
    </Tile>
  )
}

const Tile = styled.div`
  ${props => props.theme.mainFont({})}
  box-shadow: 0px 3px 6px rgba(0,0,0,.16);
  background: #FFFFFF;
  margin: 10px;
  width: 315px;
`
const TileHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 10px;
`
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 35px;
  height: auto;
`
const DesignerName = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
  color: #606060;
`

const ProductImg = styled.img`
  width: 315px;
  height: 315px;
`

const TileFooter = TileHeader.extend`
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px 10px 7px 10px;
`
const ProductName = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
`
const Votes = styled.div`
  color: ${props => props.theme.main};
  font-size: 20pt;
  font-weight: 800;
  text-align: center;
  & p {
    font-weight: 200;
    font-size: 8pt;
    color: #95989A;
    text-transform: uppercase;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`
const Button = MinimalButton.extend`
  color: #606060;
  border-color: #606060;
  font-size: 12px;
`
const Icon = styled(ReactSVG)`
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #606060;
  margin-left: 5px;
`

export default EntryTile;
