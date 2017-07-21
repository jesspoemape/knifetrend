import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

import { MinimalButton, Divider } from 'shared-components';

import trophy from './../../../../assets/trophy-icon.png';
import chevronUp from './../../../../assets/chevron-up.svg';
import chevronDown from './../../../../assets/chevron-down.svg';

import './DetailsBanner.css';

const DetailsBanner = ({ competition, showDetails, toggleView }) => {
  return (
    <div className={ showDetails ? "expanded" : "collapsed" }>
      <div className="title">
        <img src={ trophy } alt="trophy" className="icon" />
        <h1 className='headerFont'>
          { competition.name }
        </h1>
      </div>
      {
        showDetails ?
          <div className="body">
            <p className="smallBodyFont spacer">
              { competition.desc }
            </p>

            <MinimalButton style={styles.redButton}>
              Enter
            </MinimalButton>

            <h1 className="subHeaderFont spacer">
              Competition Award
            </h1>
            <Divider width={40} background="#DBDBDB" />
            <p className="smallBodyFont spacer">
              { competition.award }
            </p>

            <h1 className="subHeaderFont spacer">
              Entry Deadline
            </h1>
            <Divider width={40} background="#DBDBDB" />
            <p className="smallBodyFont spacer">
              Competition closes at { competition.endDate }
            </p>

            <div className="flex">
              <MinimalButton>
                Official
              </MinimalButton>
              <MinimalButton action={ toggleView }>
                Details
                <ReactSVG path={ chevronUp } className="buttonIcon" />
              </MinimalButton>
            </div>

          </div>
          :
          <MinimalButton action={ toggleView }>
            Details
            <ReactSVG path={ chevronDown } className="buttonIcon" />
          </MinimalButton>
      }
    </div>
  )
}

DetailsBanner.propTypes = {
   competition: PropTypes.object,
   showDetails: PropTypes.bool,
   toggleView: PropTypes.func
}

const styles = {
  redButton: {
    backgroundColor: "#E2131D",
    borderColor: "#E2131D",
    color: 'white',
    marginTop: 12,
    marginBottom: 12
  }
}

export default DetailsBanner
