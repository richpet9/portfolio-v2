import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.js';
import ItemPage from './pages/ItemPage.js';

import './index.css';

const App = () => {
  return (
    <Router id="root-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={() => 'about'} />
        <Route path="/contact" component={() => 'contact'} />
        <Route path="/photos" component={() => 'photos'} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
