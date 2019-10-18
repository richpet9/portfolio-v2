import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ItemContainer from '../components/ItemContainer';

const Home = () => {
  return (
    <main id="app-container">
      <Filter />
      <ItemContainer numItems={10} />
    </main>
  );
};

export default Home;
