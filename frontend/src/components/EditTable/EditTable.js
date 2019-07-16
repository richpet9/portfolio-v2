import React, { useState } from 'react';
import EditableCell from '../EditableCell/EditableCell.js';
import Button from '../Button/Button.js';
import { PeopleAPI, tryToGetError } from '../../functions';
import './EditTable.css';

const EditTable = props => {
    const { people, updateRecord, handleDelRow } = props;
    const [activeEdit, setActiveEdit] = useState(false);
    const [sortMethod, setSortMethod] = useState('name');

    const handleImageUpload = (id, e) => {
        PeopleAPI.uploadImage(id, e.target.files[0]).then(res => {
            if (!res.ok) {
                window.alert('Could not upload image to the server!');
                console.error('ERROR UPLOADING IMAGE:EDITTABLE.JS');
                tryToGetError(res);
            } else {
                window.alert('Successfully uploaded the user image!!');
            }
        });
    };

    const handleDelImage = id => {
        PeopleAPI.deleteImage(id).then(res => {
            if (!res.ok) {
                if (res.status === 309) {
                    //309 is the code for file not found
                    res.json().then(err => window.alert(err.message));
                } else {
                    window.alert('Could not delete the image from the server.');
                    console.error('ERROR DELETING IMAGE:EDITTABLE.JS');
                    tryToGetError(res);
                }
            } else {
                window.alert('Sucessfully removed the image.\n(You may need to refresh to see changes)');
            }
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th id="name-col">NAME</th>
                    <th id="pos-col">POSITION</th>
                    <th id="ext-col">EXT</th>
                    <th id="loc-col">LOC</th>
                    <th id="cell-col">CELL</th>
                    <th id="email-col">EMAIL</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {people.map(employee => {
                    const cells = [];
                    //For every property of our person datum
                    for (let property in employee) {
                        //Don't print the ID
                        if (property !== 'id') {
                            //Add an editable table cell
                            cells.push(
                                <EditableCell
                                    key={property}
                                    id={property + '-' + employee.id}
                                    update={updateRecord.bind(this, employee.id)}
                                    value={employee[property] || ''}
                                    activeEdit={activeEdit}
                                    setActiveEdit={setActiveEdit}
                                />
                            );
                        }
                    }

                    //When that's done, add one more cell for actions (upload image/del row)
                    cells.push(
                        <td key={employee.id} className="action-col">
                            <Button
                                action={handleDelRow.bind(this, employee.id)}
                                styles={{ backgroundImage: 'url(/img/delete-icon.png)' }}
                                tooltip="Remove row"
                            />
                            {/* The below input is hidden! */}
                            <input
                                className="file-input"
                                type="file"
                                id={'file-input-' + employee.id}
                                onChange={handleImageUpload.bind(this, employee.id)}
                                accept="image/*"
                            />
                            <Button
                                labelFor={'file-input-' + employee.id}
                                styles={{ backgroundImage: 'url(/img/image-icon.png)' }}
                                tooltip="Upload profile image"
                            />
                            <Button
                                action={handleDelImage.bind(this, employee.id)}
                                styles={{ backgroundImage: 'url(/img/image-del-icon.png)' }}
                                tooltip="Remove profile image"
                            />
                        </td>
                    );

                    //Now return the row with the cells inside
                    return (
                        <tr key={employee.id} id={employee.id}>
                            {cells}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default EditTable;
