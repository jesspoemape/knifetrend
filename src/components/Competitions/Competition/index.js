import React, { Component } from 'react';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';
import withViewer from 'kt-hocs/withViewer';

import Header from './../Header';
import CompetitionDetails from './Details';
import EntriesContainer from './EntriesContainer';
import EntryUploadModal from './../NewEntryForm';

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
    const authLink = `${process.env.REACT_APP_SERVER_URL}/auth`;
    const {viewer} = this.props;
    if (!viewer) {
      // redirects to auth0 login page
      window.location.href = authLink;
      this.setState({ modalOpen:true })
    }
    else {
      this.setState({ modalOpen:true })
    }
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  render() {
    const { data: { competition } } = this.props
    return (
      <div>
        <Header imgUrl={ url } title={ competition.name } />
        <CompetitionDetails competition={ competition } openModal={ this.openModal }/>
        <EntriesContainer entries={ competition.entries } />
        <EntryUploadModal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          competition={competition}
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
export default withViewer(graphqlWithLoading(CompetitionData,{
  options: props => ({
    variables:{ id: props.match.params.id }
  })
})(CompetitionPage));
