import React from 'react';

import Header from './../Header'
import CompetitionsContainer from './CompetitionsContainer';

const url = "https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-competitions-header.jpg"

const Home = props => (
  <div>
    <Header imgUrl={ url } title={ "Competitions" } />

    <CompetitionsContainer />
  </div>
)


export default Home;
