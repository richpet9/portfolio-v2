import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import Spinner from './components/Spinner/Spinner.js';
import './index.css';

//Non destructive array searching
let EmployeeList;

const App = () => {
    const [error, setError] = useState(null);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    //Hooks!!
    useEffect(() => {
        fetch('/api/employees')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setLoading(false);
                EmployeeList = data;
                setPeople(EmployeeList);
            })
            .catch(err => {
                setLoading(false);
                setError(err);
            });
    }, []); //<-- that empty array is a paramter for useEffect() which locks it to only 1 loop

    //Handle searching stuff
    const setSearchQuery = value => {
        if (!loading) {
            setLoading(true);
            setPeople(EmployeeList.filter(employee => employee.fullName.toLowerCase().includes(value.toLowerCase())));
            setLoading(false);
        }
    };

    return (
        <div id="app">
            <Header setSearchQuery={setSearchQuery} />
            {loading ? (
                <Spinner />
            ) : (
                <div className="container" id="card-container">
                    {error
                        ? 'Error connecting to employee database!'
                        : people.map(employee => {
                              return <Card key={employee.ext} person={employee} />;
                          })}
                </div>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
