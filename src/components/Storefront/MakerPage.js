import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';

import MakerContainer from './MakerContainer'
import Storefront from './Storefront/Storefront'
import Entries from './Entries/Entries'
import Header from './Header'
import MakerDetails from './Nav/MakerDetails'
import About from './About/About'

export default props => (
  <div>
    <Header/>
    <Container>
      <Route path='/storefront/:makerId' component = { MakerContainer }/>
      <Switch>
        <Route exact path="/storefront/:makerId" component={ Storefront } />
        <Route path="/storefront/:makerId/entries" component={ Entries } />
        <Route path="/storefront/:makerId/about" component={ About } />
      </Switch>
    </Container>
    <Media query="(max-width: 949px)" render={()=>(
      <MakerDetails/>
    )}/>
  </div>
)

const Container = styled.section`
  display: flex;
  background: #F5F5F5;
  @media(max-width: 949px){
    flex-direction: column;
  }
`
