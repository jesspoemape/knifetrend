import React from 'react';
import styled from 'styled-components';

import SVG from 'kt-components/SVG';
import currency from 'kt-utils/currency';

import plus from './../../../assets/plus.svg';

export default ({ name, price, toggle }) =>
  <TileFooter>
    <Info>
      <Name>{ name }</Name>
      <Price>{ currency(price) }</Price>
    </Info>
    <Button path={plus} onClick={toggle} />
  </TileFooter>

const TileFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Info = styled.div`
  margin: 2px 10px 2px 10px;
`
const Name = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12pt;
`
const Price = styled.p`
  font-weight: 700;
  font-size: 18pt;
  color: ${props => props.theme.main};
`
const Button = styled(SVG)`
  background: #404040;
  stroke: white;
  stroke-linecap: square;
  stroke-linejoin: square;
  stroke-width: 1px;
  height: 45px;
  width: 45px;
  padding: 8px;
  &:hover {
    background: ${props => props.theme.main}
  }
`
