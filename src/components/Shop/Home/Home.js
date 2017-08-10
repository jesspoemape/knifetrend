import React from 'react';

import Header from './Header';
import Search from './Search';
import Filter from './Filter';
import MakersContainer from './Makers/MakersContainer';
import PreOrderContainer from './PreOrderContainer';

const Home = props => {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <MakersContainer />
      <PreOrderContainer />
    </div>
  )
}

export default Home;
