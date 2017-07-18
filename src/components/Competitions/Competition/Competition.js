import React, { Component } from 'react';
import { connect } from 'react-redux';

import Details from './Details';

class Competition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gridView: false,
      showDetails: false
    }

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView(property) {
    this.setState({
      [property]: !this.state[property]
    })
  }

  render() {
    const{ competition } = this.props
    return (
        <div>
          <Details
            competition={ competition }
            showDetails={ this.state.showDetails }
            toggleView={ () => this.toggleView('showDetails') }
          />
        <h1>Need something to get covered</h1>
        </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const{ competitionId: id} = ownProps.match.params;
  return {
    competition: state.competitions.find(comp => comp.id === id/1)
  }
}

export default connect(mapStateToProps)(Competition)
