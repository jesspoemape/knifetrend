import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import './Landing.css'
import Tile from './Tile/Tile';

class Landing extends Component {
  render() {
    const{ loading, contests } = this.props.data
    const competitionTiles = loading ?
      <h1>Loading</h1>
      :
      contests.map(comp => {
        return <Tile key={ comp.id } competition={ comp } />
      })
    return (
      <div>
        <header className="headerFont header">Current Competitions</header>
        {
          <div className="background">{ competitionTiles }</div>
        }
      </div>
    )
  }
}

const ContestsQuery = gql(`
    query {
      contests {
        id,
        name,
        imgUrl,
        desc,
        award
      }
    }
  `)

export default graphql(ContestsQuery)(Landing)
