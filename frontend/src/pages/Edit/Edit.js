import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import Spinner from '../../components/Spinner/Spinner.js';
import EditableCell from '../../components/EditableCell/EditableCell.js';
import './Edit.css';

//Non destructive array searching
let EmployeeList;

const Edit = props => {
    const [error, setError] = useState(null);
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    //This function is going to update the server file, and is called whenever a value changes
    const updateRecord = id => {
        let updated = false;
        for (let i = 0; i < EmployeeList.length; i++) {
            if (EmployeeList[i].ext === id) {
                const row = document.getElementById(id);
                EmployeeList[i].fullName = row.children[0].innerText;
                EmployeeList[i].position = row.children[1].innerText;
                EmployeeList[i].ext = row.children[2].innerText;
                EmployeeList[i].loc = row.children[3].innerText;
                EmployeeList[i].cell = row.children[4].innerText;
                EmployeeList[i].email = row.children[5].innerText;

                updated = true;
            }
        }

        if (updated) {
            fetch('/api/update', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(EmployeeList)
            })
                .then(response => response.json())
                .then(data => (EmployeeList = data))
                .catch(err => {
                    setError('Error occured when updating database file, please refresh. Contact system administrator is problem persists.');
                    console.log('Error occured when connecting to database: ', err);
                });
        }
    };

    //Hooks!!
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
                setError('Error connecting to employee database!');
                setLoading(false);
            });
    }, []); //<-- that empty array is a paramter for useEffect() which locks it to only 1 loop

    return (
        <div id="edit-container">
            <Header />
            <div className="container" id="edit-body-container">
                {loading ? (
                    <Spinner />
                ) : error ? (
                    error
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>POSITION</th>
                                <th>EXT</th>
                                <th>LOC</th>
                                <th>CELL</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map(employee => {
                                const { fullName, position, ext, loc, cell, email } = employee;
                                return (
                                    <tr className="employee-row" key={ext} id={ext}>
                                        <EditableCell update={updateRecord.bind(this, ext)} value={fullName} />
                                        <EditableCell update={updateRecord.bind(this, ext)} value={position} />
                                        <EditableCell update={updateRecord.bind(this, ext)} value={ext} />
                                        <EditableCell update={updateRecord.bind(this, ext)} value={loc} />
                                        <EditableCell update={updateRecord.bind(this, ext)} value={cell} />
                                        <EditableCell update={updateRecord.bind(this, ext)} value={email} />
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
                <div id="controls">
                    <button type="button">Add Row</button>
                </div>
            </div>
        </div>
    );
};

export default Edit;
