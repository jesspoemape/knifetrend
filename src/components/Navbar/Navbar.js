import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import { StyleSheet, css } from 'aphrodite/no-important';

import logo from './../../assets/knifetrend-logo.png';
import menu from './../../assets/menu.svg';
import chevronLeft from './../../assets/chevron-left.svg';

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
          <ReactSVG
            path={ chevronLeft }
            callback={ (svg) => svg.addEventListener("click", this.props.history.goBack) }
            className={ css(styles.backIcon) }
          />

          <img className={css(styles.logo)} src={ logo } alt="KnifeTrend Logo" />

          <ReactSVG
            path={ menu }
            callback={ (svg) => svg.addEventListener("click", this.toggleDisplay) }
            className={ css(styles.menuIcon) }
          />
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
  backIcon: {
    stroke: 'white'
  },
  menuIcon: {
    width: 30,
    height: 40,
    stroke: 'white'
  }
})

export default Navbar
