import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import MakerContainer from './MakerContainer'
import Storefront from './Storefront/Storefront'
import Competition from './Competition/Competition'
import Cover from './Cover'


export default props => (
  <div>
    <Cover/>
    <Container>
    <Route path='/makers' component = { MakerContainer }/>
    <Switch>
      <Route exact path="/makers/" component={ Storefront } />
      <Route path="/makers/competition" component={ Competition } />
    </Switch>
    </Container>
  </div>
)

const Container = styled.section`
  display: flex;
`
