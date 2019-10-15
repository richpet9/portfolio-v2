import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const ItemPage = props => {
  return (
    <div id="item-page-container">
      <Route path="/post" component={() => '/post'}></Route>
      <Route path="/post/:id/:name?" component={() => '/post/:id/:name?'}></Route>
    </div>
  );
};

export default withRouter(ItemPage);
