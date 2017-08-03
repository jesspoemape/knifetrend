import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import moment from 'moment';

import MinimalButton from 'kt-components/MinimalButton';

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
      <SectionWithoutTitle>
        <LargeText>{`${daysLeft} left`}</LargeText>
        <LargeText>{`Entry Deadline: ${deadline}`}</LargeText>
        <LargeText>{competition.entries ? competition.entries.length : null} Entries</LargeText>
        <RedButton>Enter Now</RedButton>
      </SectionWithoutTitle>
    </Container>
  )
}

export default CompetitionDetails;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: solid ${props => props.theme.main};
  padding: 10px 5%;
  margin: 0 auto;
  padding: 10px;
  ${props => props.theme.media.tablet} {
    flex-direction: row;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${props => props.theme.media.tablet} {
    width: 300px;
    padding: 0 20px;
  }
`
const SectionWithoutTitle = Section.extend`
  justify-content: center;
  flex-direction: column;
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
  margin-bottom: 10px;
`
const LargeText = styled.p`
  ${props => props.theme.mainFont({})};
  font-weight: 300;
  font-size: 14pt;
  line-height: 22pt;
  text-transform: capitalize;
`
const RedButton = MinimalButton.extend`
  margin: 12px 0px 12px 0px;
  background-color: ${props => props.theme.main};
  border-color: ${props => props.theme.main};
  color: white;
  padding: 8px 16px;
  font-size: 12pt;
  font-weight: 400;
  letter-spacing: 1.2pt;
  &:hover {
    background: #B20E0D;
    color: white;
  }
  ${props => props.theme.media.tablet} {
    margin: 12px 0px 0px 0px;
  }
`
