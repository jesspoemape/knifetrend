import React from 'react';

import Header from './Header';
import Search from './Search';
import Filter from './Filter';
import MakersContainer from './Makers';
import PreOrderContainer from './PreOrderContainer';
import FeaturedKnivesContainer from './FeaturedKnives';

export default props =>
  <div>
    <Header />
    <Search />
    <Filter />
    <FeaturedKnivesContainer/>
    <MakersContainer />
    <PreOrderContainer />
  </div>
