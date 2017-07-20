import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { StyleSheet, css } from 'aphrodite/no-important';

import landingBg from './../../../assets/landing-bg.png';
import Tile from './Tile';

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
        <header className={`headerFont ${css(styles.header)}`}>Current Competitions</header>
        {
          <div className={ css(styles.background) }>{ competitionTiles }</div>
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  background: {
    background: `url(${landingBg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

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
