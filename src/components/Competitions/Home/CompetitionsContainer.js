import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Filter from './../Filter/Filter';
import SponserCompetitionTile from './SponserCompetitionTile';
import CompetitionTile from './CompetitionTile';

class Landing extends Component {
  render() {
    const{ competitions=[] } = this.props.data
    const tiles = competitions.map(comp => (
      <CompetitionTile key={ comp.id } {...comp} />
    ))
    return (
      <div>
        <Section>
          <Filter />
        </Section>
        <Container>
          { tiles }
          <SponserCompetitionTile />
        </Container>
      </div>
    )
  }
}

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
const CompetitionsQuery = gql(`
    query {
      competitions {
        id,
        name,
        imgUrl,
        endDate,
        shortDesc,
        desc
      }
    }
  `)

export default graphql(CompetitionsQuery)(Landing)