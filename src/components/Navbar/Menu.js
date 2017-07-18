import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

const NavLink = ({ toggleDisplay, to, children }) => {
  return <Link to={ to } className={`headerFont ${css(styles.item)}`} onClick={ toggleDisplay } >{ children }</Link>
}

const Menu =  ({ toggleDisplay }) => {
  return (
    <div className={css(styles.menu)}>
      <div className={css(styles.exit)} >
        <svg onClick={ toggleDisplay } xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </div>
      <div className={css(styles.list)}>
        <NavLink toggleDisplay={ toggleDisplay } to="/competitions">Competitions</NavLink>
        <NavLink toggleDisplay={ toggleDisplay } to="/about">About</NavLink>
        <NavLink toggleDisplay={ toggleDisplay } to="/sign-up">Sign Up</NavLink>
        <NavLink toggleDisplay={ toggleDisplay } to="/profile">Profile</NavLink>
      </div>
    </div>
  )
}

Menu.propTypes = {
  toggleDisplay: PropTypes.func
}

const styles = StyleSheet.create({
  menu: {
    background: '#404040',
    color: '#fff',
    padding: 13,
    boxShadow: '0 2px 10px rgba(0,0,0,.2)',
    position: 'absolute',
    boxSizing: 'border-box',
    top: 0,
    width: '100%',
    zIndex: 1000
  },
  exit: {
    textAlign: 'right'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: ''
  },
  item: {
    textAlign: 'center',
    width: '80%',
    padding: 20,
    color: 'white',
    borderTopStyle: 'solid',
    borderWidth: 'thin',
    borderColor: '#95989A',
    ':first-of-type': {
      borderTop: 'none'
    }
  }
})

export default Menu
