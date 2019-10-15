import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home.js';
import About from './pages/About.js';
import ItemPage from './pages/ItemPage.js';
import Footer from './components/Footer';

import './index.css';

const App = () => {
  return (
    <Router id="root-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={() => 'contact'} />
        <Route path="/photos" component={() => 'photos'} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
