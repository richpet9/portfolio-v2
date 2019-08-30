import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ItemContainer from '../components/ItemContainer';

import './Home.css';

const Home = () => {
  return (
    <div id="app-container">
      <Filter />
      <ItemContainer numItems={12} />
    </div>
  );
};

export default Home;
