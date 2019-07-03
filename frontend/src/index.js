import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AppPage from './pages/App/App.js';
import EditPage from './pages/Edit/Edit.js';
import Header from './components/Header/Header.js';

//Non destructive array searching
let EmployeeList;

const RoutingContainer = () => {
    const [people, setPeople] = useState([]); //Container for our employee array
    const [loading, setLoading] = useState(true); //Whether or not the application shoudl display loading
    const [error, setError] = useState(null); //Whether or not to display error, and the message

    const postData = data => {
        fetch('/api/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => (EmployeeList = data))
            .catch(err => {
                setError('Error occured when updating database file, please refresh. Contact system administrator is problem persists.');
                console.log('Error occured when connecting to database: ', err);
            });
    };

    useEffect(() => {
        fetch('/api/employees')
            .then(res => {
                return res.json();
            })
            .then(data => {
                EmployeeList = data;
                setPeople(EmployeeList);
                setLoading(false);
            })
            .catch(err => {
                setError(
                    'Error occured when connecting to the database file, please refresh. Contact system administrator if this problem persists.'
                );
                setLoading(false);
                console.log('Error occured when connecting to database: ', err);
            });
    }, []);

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={props => <AppPage {...props} people={people} loading={loading} error={error} />} />
                <Route path="/edit" render={props => <EditPage {...props} people={people} loading={loading} error={error} postData={postData} />} />
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

ReactDOM.render(<RoutingContainer />, document.getElementById('root'));
