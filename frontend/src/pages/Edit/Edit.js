import React from 'react';
import Header from '../../components/Header/Header.js';
import Spinner from '../../components/Spinner/Spinner.js';
import EditTable from '../../components/EditTable/EditTable.js';
import Button from '../../components/Button/Button.js';
import { PeopleAPI, tryToGetError } from '../../functions';
import './Edit.css';

const Edit = props => {
    const { status, setPeople, postData } = props;
    const { people } = status;

    //This function is going to update the server file, and is called whenever a value changes
    const updateRecord = id => {
        let updated = false;
        let employee = people.filter(employee => employee.id === id);

        //Check if we successfully found the employee
        if (employee && employee.length !== 0) {
            //We did! Set the employee to the only thing in the filtered array
            employee = employee[0];
            for (let property in employee) {
                //If it's the ID prop just skip it
                if (property !== 'id') {
                    //Get the value currently in the DOM (using textContent for support reasons)
                    let dValue = document.getElementById(property + '-' + id).textContent.trim();
                    //If the value is different, update it and mark a postData as needed
                    if (employee[property] !== dValue) {
                        employee[property] = dValue;
                        updated = true;
                    }
                }
            }
        } else {
            //Oh no we didn't
            window.alert('Could not locate employee by ID!\nThis is really bad.\nPlease see console and contact system administrator.');
            console.error(
                "ERROR:EDIT.JS:updateRecord(): Employee ID could not be matched. This means there's a discrepancy between " +
                    'the `people` state variable and the server datebase, or duplicate IDs.\nThis is really bad and requires ' +
                    'immediate attention. Ensure the correct ID is being bound to updateRecord() in EditTable.js.\n' +
                    'This value needs to match the database or everything will break! It may be worth manually going into `people.json` ' +
                    'and correcting employee IDs'
            );
        }

        //If we found the employee, and updated their info, post it to the API
        if (updated) {
            postData(people);
        }
    };

    //Function to handle adding a row
    //NOTE how this does NOT call an update to the the database
    //that happens when a cell is edited. As a result, blank cells are deleted!
    //That is, unless they were edited THEN made blank. Those stay.
    const handleAddRow = () => {
        let id = null;
        //Isn't this line both beautiful and just terrible at the same time?
        people.length <= 0 ? (id = 0) : (id = people[people.length - 1].id + 1);

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
                    <Button action={handleAddRow} value="Add Row" />
                </div>
            </div>
        </div>
    );
};

export default Edit;
