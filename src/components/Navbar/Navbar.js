import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import logo from './../../assets/knifetrend-logo.png';

import Menu from './Menu'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }
  render() {
    return (
      <div>
        <div className={css(styles.nav)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
          </svg>
          <img className={css(styles.logo)} src={ logo } alt="KnifeTrend Logo" />
          <svg onClick={ this.toggleDisplay } xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"  strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </div>
        { this.state.displayMenu ? <Menu toggleDisplay={ this.toggleDisplay } /> : null }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    background: '#E2131D',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5px'
  },
  logo: {
    height: 30
  },
})

export default Navbar
