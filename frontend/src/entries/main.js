import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Header';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Footer from '../components/Footer';
import { FadeSwitch } from '../util/transition-router';

import '../index.css';

const App = () => {
    return (
        <Router id="root-container">
            <Header />
            <FadeSwitch timeout={200}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about/:resume?" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/project/:id" component={Home} />
            </FadeSwitch>
            <Footer />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
