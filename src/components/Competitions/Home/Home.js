import React from 'react';

import Header from './../Header'
import Filter from './../Filter';
import CompetitionsContainer from './CompetitionsContainer';

const url = "https://s3-us-west-2.amazonaws.com/knifetrend-assets/kt-competitions-header.jpg"

const Home = props => (
  <div>
    <Header imgUrl={ url } title={ "Competitions" } />
    <Filter />
    <CompetitionsContainer />
  </div>
)


export default Home;
