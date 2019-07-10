import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.js';
import Spinner from '../../components/Spinner/Spinner.js';
import EditTable from '../../components/EditTable/EditTable.js';
import { PeopleAPI, tryToGetError } from '../../functions';
import './Edit.css';

const Edit = props => {
    const { status, setPeople, postData } = props;
    const { people } = status;

    //This function is going to update the server file, and is called whenever a value changes
    //TODO: Add a conditional to check if anything actually changed
    const updateRecord = id => {
        let updated = false;
        let tempArr = people;

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i].id === id) {
                const row = document.getElementById(id);
                tempArr[i].fullName = row.children[0].innerText;
                tempArr[i].position = row.children[1].innerText;
                tempArr[i].ext = row.children[2].innerText;
                tempArr[i].loc = row.children[3].innerText;
                tempArr[i].cell = row.children[4].innerText;
                tempArr[i].email = row.children[5].innerText;
                updated = true;
                break;
            }
        }

        //If we found the employee, and updated their info, post it to the API
        if (updated) {
            postData(tempArr);
            setPeople(tempArr);
        } else {
            console.log('could not find... id: ' + id);
        }
    };

    //Function to handle adding a row
    //NOTE how this does NOT call an update to the the database
    //that happens when a cell is edited. As a result, blank cells are deleted!
    //That is, unless they were edited THEN made blank. Those stay.
    const handleAddRow = () => {
        let id = null;
        if (people.length <= 0) {
            id = 0;
        } else {
            id = people[people.length - 1].id + 1;
        }
        setPeople(
            people.concat({
                id: id,
                fullName: '',
                position: '',
                ext: '',
                loc: '',
                cell: '',
                email: ''
            })
        );
    };

    //Function to handle deleting a row
    const handleDelRow = id => {
        for (let i = 0; i < people.length; i++) {
            if (people[i].id === id) {
                //Make sure they want to do this
                if (window.confirm('Are you sure you want to delete this entry?')) {
                    //Filter for all the people who's ID does not equal the query ID
                    // there by removing that ID
                    const filteredPeople = people.filter(employee => employee.id !== id);
                    postData(filteredPeople);
                    setPeople(filteredPeople);
                    PeopleAPI.deleteImage(id).then(res => {
                        if (!res.ok) {
                            if (res.status !== 309) {
                                //309 is the code for file not found, which doesn't matter since we're deleting the entry anyway
                                console.error('ERROR DELETING IMAGE:EDIT.JS');
                                tryToGetError(res);
                            }
                        }
                    });
                }
            }
        }
    };

    return (
        <div id="edit-container">
            <Header />
            <div className="container" id="edit-body-container">
                {status.loading ? (
                    <Spinner />
                ) : (
                    status.error || <EditTable people={status.people} updateRecord={updateRecord} handleDelRow={handleDelRow} />
                )}
                <div id="controls">
                    <button type="button" onClick={handleAddRow}>
                        Add Row
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Edit;
