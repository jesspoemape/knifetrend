import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className={css(styles.nav)}>

          <img src=
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>


        </div>
    )
  }
}

export default Navbar


const styles = StyleSheet.create({
  nav: {
    background: '#E2131D',
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
