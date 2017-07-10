import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important';

import MinimalButton from './../../shared/MinimalButton.js'
import { ChevronDown } from './../../shared/svgs';

import trophy from './../../../assets/trophy-icon.png';

const Details = ({ competition, showDetails, toggleView }) => {
  return (
    <div className={ css(styles.container) }>
      <div className={ css(styles.container) }>
        <img src={ trophy } alt="trophy" className={ css(styles.icon) } />
        <h1 className='headerFont'>{ competition.name }</h1>
      </div>
      <MinimalButton action={ toggleView }>
        Details
        <ChevronDown />
      </MinimalButton>
    </div>
  )
}

Details.propTypes = {
   competition: PropTypes.object.isRequired,
   showDetails: PropTypes.bool,
   toggleView: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    maxHeight: '100%',
    marginRight: 5
  }
})

export default Details
