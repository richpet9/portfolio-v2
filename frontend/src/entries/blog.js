import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { BlogHeader } from '../components/Header';
import Blog from '../pages/Blog';
import Footer from '../components/Footer';

import '../index.css';

const App = () => {
    return (
        <Router id="root-container">
            <BlogHeader />
            <Route path="/blog/:subblog?/:id?" component={Blog} />
            <Footer />
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
