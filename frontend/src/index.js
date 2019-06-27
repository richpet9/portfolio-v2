import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js';
import Card from './components/Card/Card.js';
import './index.css';

const App = () => {
    const res = [];
    const person = {
        fullName: 'Loremia Ipsumiott',
        position: 'Senior Developer',
        ext: 5555,
        loc: '30-63D',
        cell: 19084583002,
        email: 'Email.Emelio@Viacommix.com'
    };

    for (let i = 0; i < 16; i++) {
        res.push(<Card key={i} person={person} />);
    }

    return (
        <div id="app">
            <Header />
            <div className="container" id="card-container">
                {res}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
