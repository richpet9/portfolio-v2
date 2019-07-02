import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App/App.js';
import Edit from './pages/Edit/Edit.js';
import Header from './components/Header/Header.js';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/edit" component={Edit} />
                <Route component={NoRoute} />
            </Switch>
        </Router>
    );
};

const NoRoute = () => {
    return (
        <h1>
            <Header />
            404: That page was not found!
        </h1>
    );
};

ReactDOM.render(<Routing />, document.getElementById('root'));
