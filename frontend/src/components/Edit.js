import React, { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner.js';

//Non destructive array searching
let EmployeeList;

const Edit = props => {
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
            {loading ? (
                <Spinner />
            ) : error ? (
                error
            ) : (
                <table>
                    <tbody>
                        {people.map(employee => {
                            return (
                                <tr key={employee.ext}>
                                    <td>{employee.fullName}</td>
                                    <td>{employee.position}</td>
                                    <td>{employee.ext}</td>
                                    <td>{employee.loc}</td>
                                    <td>{employee.cell}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Edit;
