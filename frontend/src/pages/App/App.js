import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import Card from '../../components/Card/Card.js';
import Spinner from '../../components/Spinner/Spinner.js';
import './App.css';

const App = props => {
    const { status, setSearchQuery } = props;

    return (
        <div id="app">
            <Header setSearchQuery={setSearchQuery} />
            {status.loading ? (
                <Spinner />
            ) : (
                <div className="container" id="card-container">
                    {status.error ||
                        status.people.map(employee => {
                            return <Card key={employee.id} person={employee} />;
                        })}
                </div>
            )}
        </div>
    );
};

export default App;
