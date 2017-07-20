import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { DataLoader } from 'shared-components';
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
    const{ data } = this.props
    return (
      <DataLoader data={data}>
          <Details
            competition={ data.contest }
            showDetails={ this.state.showDetails }
            toggleView={ () => this.toggleView('showDetails') }
          />
          <h1>Need something to get covered</h1>
      </DataLoader>
    )
  }
}

const ContestQuery = gql(`
    query($id: Int) {
      contest(id: $id) {
        id,
        name,
        imgUrl,
        desc,
        award,
        endDate
      }
    }
  `)

export default graphql( ContestQuery, {
    options: props => ({
      variables: {
        id: props.match.params.competitionId
      }
    })
  }
)(Competition)
