import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import moment from 'moment';

import { MinimalButton } from 'shared-components';

const CompetitionDetails = ({ competition }) => {
  const value = numeral(competition.awardValue).format('$ 0,0[.]00');
  const endMoment = moment(new Date(competition.endDate).toJSON());
  const daysLeft = endMoment.fromNow(true);
  const deadline = endMoment.format("MMM D, YYYY");
  return (
    <Container>
      <Section>
        <H2>Entry Details</H2>
        <P>{ competition.desc }</P>
      </Section>
      <Section>
        <H2>Grand Prize</H2>
        <P>{ competition.award }</P>
        <LargeText>Grand Prize Value: { value }</LargeText>
      </Section>
      <Section>
        <LargeText>{`${daysLeft} left`}</LargeText>
        <LargeText>{`Entry Deadline: ${deadline}`}</LargeText>
        <LargeText>1,234 Entries</LargeText>
        <RedButton>Enter Now</RedButton>
      </Section>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  border-bottom: solid ${props => props.theme.main};
  padding: 10px 5%;
  margin: 0 auto;
  padding: 10px;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  text-align: center;
`
const H2 = styled.h2`
  ${props => props.theme.secondaryFont({})};
  color: ${props => props.theme.main};
  font-size: 22pt;
  text-transform: uppercase;
  margin: 10px;
`
const P = styled.p`
  ${props => props.theme.mainFont({})};
  font-weight: 200px;
  font-size: 12pt;
  line-height: 16pt;
`
const LargeText = styled.p`
  ${props => props.theme.mainFont({})};
  font-weight: 300;
  font-size: 16pt;
  line-height: 28pt;
  text-transform: capitalize;
`
const RedButton = MinimalButton.extend`
  margin: 12px 0px;
  background-color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  color: white;
  padding: 10px 20px;
  font-size: 14pt;
`

export default CompetitionDetails;
