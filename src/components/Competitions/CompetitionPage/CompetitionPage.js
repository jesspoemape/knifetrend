import React, { Component } from 'react';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Header from './../Header';
import CompetitionDetails from './CompetitionDetails';
import EntriesContainer from './EntriesContainer';
import EntryUploadModal from '../../EntryUploadModal/EntryUploadModal';

const url = "https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-competitions-entries-header.jpg";

class CompetitionPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(entryId) {
    this.setState({ modalOpen:true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  render() {
      const { data: { competition }, match } = this.props
      return (
        <div>
          <Header imgUrl={ url } title={ competition.name } />
          <CompetitionDetails competition={ competition } openModal={ this.openModal }/>
          <EntriesContainer competition={ competition } />
          <EntryUploadModal 
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
          />
        </div>
      )
  }
} 

const CompetitionData = gql`
  query($id: Int!) {
    competition(id:$id) {
      id
      name
      desc
      award
      awardValue
      endDate
      ...EntriesContainer
    }
  }
  ${EntriesContainer.fragment}
`

export default graphqlWithLoading(CompetitionData,{
  options: props => ({
    variables:{ id: props.match.params.id }
  })
})(CompetitionPage);
