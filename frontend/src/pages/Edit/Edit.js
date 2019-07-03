import React, { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Spinner from '../../components/Spinner/Spinner.js';
import EditableCell from '../../components/EditableCell/EditableCell.js';
import './Edit.css';

/**
 * Delete button + warning
 * Add row
 * Make a proper ID system
 *  * Images
 * More descriptive error handling
 */

const Edit = props => {
    const [activeEdit, setActiveEdit] = useState(false);
    const { people, loading, error, postData } = props;

    //This function is going to update the server file, and is called whenever a value changes
    const updateRecord = id => {
        let updated = false;

        setActiveEdit(false);

        for (let i = 0; i < people.length; i++) {
            if (people[i].ext === id) {
                const row = document.getElementById(id);
                people[i].fullName = row.children[0].innerText;
                people[i].position = row.children[1].innerText;
                people[i].ext = row.children[2].innerText;
                people[i].loc = row.children[3].innerText;
                people[i].cell = row.children[4].innerText;
                people[i].email = row.children[5].innerText;
                updated = true;
                break;
            }
        }

        //If we found the employee, and updated their info, post it to the API
        if (updated) {
            postData(people);
        }
    };

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
                                const cells = [];
                                for (let property in employee) {
                                    cells.push(
                                        <EditableCell
                                            key={property}
                                            update={updateRecord.bind(this, employee.ext)}
                                            value={employee[property]}
                                            activeEdit={activeEdit}
                                            setActiveEdit={setActiveEdit}
                                        />
                                    );
                                }
                                return (
                                    <tr key={employee.ext} id={employee.ext}>
                                        {cells}
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
