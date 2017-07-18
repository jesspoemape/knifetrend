import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important';

import { MinimalButton, Divider } from 'shared-components';
import { ChevronDown } from './../../shared/svgs';

import trophy from './../../../assets/trophy-icon.png';

const Details = ({ competition, showDetails, toggleView }) => {
  const containerStyle = css(
    styles.container,
    showDetails ? styles.expanded : styles.collapsed
  )
  return (
    <div className={ containerStyle }>
      <div className={ css(styles.title) }>
        <img src={ trophy } alt="trophy" className={ css(styles.icon) } />
        <h1 className='headerFont'>{ competition.name }</h1>
      </div>
      {
        showDetails ?
          <div className={ css(styles.body) }>
            <p className="smallBodyFont">{ competition.description }</p>
            <MinimalButton bgColor="#E2131D" color="white"> Enter </MinimalButton>

            <h1 className="subHeaderFont">Competition Award</h1>
            <Divider width={40} background="#DBDBDB" />
            <p className="smallBodyFont">{ competition.awardDescription }</p>

            <h1 className="subHeaderFont">Competition Deadline</h1>
            <Divider width={40} background="#DBDBDB" />
            <p className="smallBodyFont">Competition closes at { competition.endDate.toDateString() }</p>

          </div>
          :
          <MinimalButton action={ toggleView }> Details <ChevronDown /></MinimalButton>
      }
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
    padding: 0
  },
  collapsed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5
  },
  expanded: {
    background: 'white'
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    padding: 5
  },
  icon: {
    maxHeight: '100%',
    marginRight: 5
  },
  body: {
    position: 'absolute',
    width: '100%',
    padding: '0px 30px',
    background: 'inherit'
  }
})

export default Details
