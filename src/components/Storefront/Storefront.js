import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { gql } from 'react-apollo';

import graphqlWithLoading from 'kt-hocs/graphqlWithLoading';

import Header from './Header'
import Nav from './Nav/NavContainer';
import Store from './Store/Store'
import About from './About/About'
import Entries from './Entries/Entries'

const Storefront = ({data:{ maker }}) => (
  <div>
    <Header {...maker} />
    <Section>
      <Nav />
      <PageContent>
        <Switch>
          <Route exact path="/storefront/:makerId" component={ Store } />
          <Route path="/storefront/:makerId/entries" component={ Entries } />
          <Route path="/storefront/:makerId/about" component={ About } />
        </Switch>
      </PageContent>
    </Section>
  </div>
)

const StorefrontQuery = gql`
  query($id: Int!) {
    maker(id:$id) {
      storeName
      coverPhoto
      profilePhoto
    }
  }
`

export default graphqlWithLoading(StorefrontQuery, {
  options: props => ({
    variables:{ id: props.match.params.makerId }
  })
})(Storefront);

const Section = styled.section`
  display: flex;
  background: #F5F5F5;
  flex-direction: column;
  ${props => props.theme.media.desktop}{
    flex-direction: row;
  }
`
const PageContent = styled.main`
  margin: 20px;
`
