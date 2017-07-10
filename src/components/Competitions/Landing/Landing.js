import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';

import landingBg from './../../../assets/landing-bg.png';
import Tile from './Tile';

class Landing extends Component {
  render() {
    const competitionTiles = this.props.competitions.map(comp => {
      return <Tile key={ comp.id } competition={ comp } />
    })
    return (
      <div>
        <header className={`headerFont ${css(styles.header)}`}>Current Competitions</header>
        <div className={ css(styles.background) }>{ competitionTiles }</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    competitions: state.competitions
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

export default connect(mapStateToProps)(Landing)
