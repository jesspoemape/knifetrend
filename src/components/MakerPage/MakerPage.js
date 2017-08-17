import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';

import MakerContainer from './MakerContainer'
import Storefront from './Storefront/Storefront'
import Competition from './Competition/Competition'
import Cover from './Cover'
import MakerDetails from './MakerMenu/MakerDetails'
import AboutTheShop from './AboutTheShop/AboutTheShop'


export default props => (
  <div>
    <Cover/>
    <Container>
      <Route path='/makers' component = { MakerContainer }/>
      <Switch>
        <Route exact path="/makers/" component={ Storefront } />
        <Route path="/makers/competition" component={ Competition } />
        <Route path="/makers/about" component={ AboutTheShop } />
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
