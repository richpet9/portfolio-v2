import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.js';

import './index.css';

const App = () => {
  return (
    <Router id="root-container">
      <Header />
      <Route path="/" component={Home} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
