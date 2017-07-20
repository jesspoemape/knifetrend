import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import ReactSVG from 'react-svg';

import { MinimalButton, Divider } from 'shared-components';

import trophy from './../../../assets/trophy-icon.png';
import chevronUp from './../../../assets/chevron-up.svg';
import chevronDown from './../../../assets/chevron-down.svg';

const Details = ({ competition, showDetails, toggleView }) => {
  return (
    <div className={ css(showDetails ? styles.expanded : styles.collapsed) }>
      <div className={ css(styles.title) }>
        <img src={ trophy } alt="trophy" className={ css(styles.icon) } />
        <h1 className='headerFont'>
          { competition.name }
        </h1>
      </div>
      {
        showDetails ?
          <div className={ css(styles.body) }>
            <p className={`smallBodyFont ${css(styles.spacer)}`}>
              { competition.desc }
            </p>

            <MinimalButton style={inline_styles.redButton}>
              Enter
            </MinimalButton>

            <h1 className={`subHeaderFont ${css(styles.spacer)}`}>
              Competition Award
            </h1>
            <Divider width={40} background="#DBDBDB" />
            <p className={`smallBodyFont ${css(styles.spacer)}`}>
              { competition.award }
            </p>

            <h1 className={`subHeaderFont ${css(styles.spacer)}`}>
              Entry Deadline
            </h1>
            <Divider width={40} background="#DBDBDB" />
            <p className={`smallBodyFont ${css(styles.spacer)}`}>
              Competition closes at { competition.endDate }
            </p>

            <div className={ css(styles.flex) }>
              <MinimalButton>
                Official
              </MinimalButton>
              <MinimalButton action={ toggleView }>
                Details
                <ReactSVG path={ chevronUp } className={ css(styles.buttonIcon) } />
              </MinimalButton>
            </div>

          </div>
          :
          <MinimalButton action={ toggleView }>
            Details
            <ReactSVG path={ chevronDown } className={ css(styles.buttonIcon) } />
          </MinimalButton>
      }
    </div>
  )
}

Details.propTypes = {
   competition: PropTypes.object,
   showDetails: PropTypes.bool,
   toggleView: PropTypes.func
}

const inline_styles = {
  redButton: {
    backgroundColor: "#E2131D",
    borderColor: "#E2131D",
    color: 'white',
    marginTop: 12,
    marginBottom: 12
  }
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  collapsed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 5,
    boxShadow: '0 4px 4px -1px rgba(0,0,0,.2)'
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
    background: 'inherit',
    boxShadow: '0 4px 4px -1px rgba(0,0,0,.2)',
    paddingBottom: 10
  },
  buttonIcon: {
    display: "flex",
    alignItems: 'center',
    marginLeft: 5
  },
  spacer: {
    marginTop: 12,
    marginBottom: 12
  }
})

export default Details
