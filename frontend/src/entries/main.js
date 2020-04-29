import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../components/Header';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Footer from '../components/Footer';
import { FadeSwitch, FadeInComponent } from '../util/transition-router';

import '../index.css';

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Router id="root-container">
            <Header />
            <FadeSwitch timeout={100} controller={(bool) => setLoading(bool)}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/project/:id" component={Home} />
            </FadeSwitch>
            <FadeInComponent show={!loading} timeout={100}>
                <Footer />
            </FadeInComponent>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
