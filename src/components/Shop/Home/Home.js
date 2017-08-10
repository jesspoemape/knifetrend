import React from 'react';

import Header from './Header';
import Search from './Search';
import Filter from './Filter';
import MakersContainer from './Makers/MakersContainer';
import PreOrderContainer from './PreOrderContainer';
import FeaturedKnivesContainer from './FeaturedKnives/FeaturedKnivesContainer';

const Home = props => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <FeaturedKnivesContainer/>
      <MakersContainer />
      <PreOrderContainer />
    </div>
  )
}

export default Home;
