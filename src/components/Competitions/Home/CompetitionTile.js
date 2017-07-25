import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const CompetitionTile = ({ id, name, desc, endDate, imgUrl, to, children }) => {
  const numOfDays = moment(new Date(endDate).toJSON()).fromNow(true);
  return (
    <FlexItemContainer >
      <Link to={ to || `/competitions/${id}`} >
        <Background background={ imgUrl }>
          <H2>{ name }</H2>
          <P>{ desc }</P>
          { children || <DaysLeft>{ `${numOfDays} left` }</DaysLeft> }
        </Background>
      </Link>
    </FlexItemContainer>
  )
}

export const FlexItemContainer = styled.section`
  flex-grow: 1;
  flex-basis: 100%;
  height: 200px;
  ${props => props.theme.media.tablet} {
    flex-basis: 50%;
    height: 250px;
  }
  & > a {
    width: 100%;
    height: 100%;
  }
`
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('${props => props.background}') no-repeat center center ;
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 100%;
`
const H2 = styled.h2`
  ${props => props.theme.mainFont({})}
  color: white;
  font-size: 24pt;
  line-height: 38pt;
  font-weight: 300;
  margin-top: 2%;
  ${props => props.theme.media.desktop} {
    margin-top: 5%;
  }
`
const P = styled.p`
  ${props => props.theme.mainFont({})}
  color: white;
  font-size: 14pt;
  font-weight: 100;
`
const DaysLeft = styled.p`
  ${props => props.theme.mainFont({})}
  color: white;
  font-size: 10pt;
  font-weight: 700;
  margin-top: 30px;
  text-transform: capitalize;
`

export default CompetitionTile;
