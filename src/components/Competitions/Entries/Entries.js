import React from 'react';
import { gql, graphql } from 'react-apollo';
import Header from './../Header'

const url = "https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-competitions-entries-header.jpg"
const Entries = ({ data: { competition={} } }) => {
  return (
    <div>
      <Header imgUrl={ url } title={ competition.name } />
    </div>
  )
}

const CompetitionData = gql(`
  query($id: Int!) {
    competition(id:$id) {
      id
      name
      desc
      award
      endDate
    }
  }
`)

export default graphql(CompetitionData,{
  options: props => ({ variables:{ id: props.match.params.id } })
})(Entries);
