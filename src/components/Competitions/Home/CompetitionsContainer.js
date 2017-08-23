import React from 'react';
import { gql } from 'react-apollo';
import styled from 'styled-components';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading'
import SponserCompetitionTile from './SponserCompetitionTile';
import CompetitionTile from './CompetitionTile';


const Landing = props => {
  const{ competitions } = props.data
  const tiles = competitions.map(comp => (
    <CompetitionTile key={ comp.id } {...comp} />
  ))
  return (
    <div>
      <Section>
      </Section>
      <Container>
        { tiles }
        <SponserCompetitionTile />
      </Container>
    </div>
  )
}

const CompetitionsQuery = gql`
    query {
      competitions {
        id
        name
        imgUrl: primaryPhoto
        endDate
        shortDesc
        desc
      }
    }
  `

export default graphqlWithLoading(CompetitionsQuery)(Landing)

const Section = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: ${props => props.theme.shadow};
`

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row wrap;
  ${props => props.theme.media.xl} {

  }
`
