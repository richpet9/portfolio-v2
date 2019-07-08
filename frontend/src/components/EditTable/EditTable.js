import React, { useState } from 'react';
import EditableCell from '../EditableCell/EditableCell.js';
import './EditTable.css';

const EditTable = props => {
    const { people, updateRecord, handleDelRow, uploadImage } = props;
    const [activeEdit, setActiveEdit] = useState(false);

    const handleImageUpload = (id, e) => {
        uploadImage(e.target.files[0], id);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>POSITION</th>
                    <th>EXT</th>
                    <th>LOC</th>
                    <th>CELL</th>
                    <th>EMAIL</th>
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
                                    update={updateRecord.bind(this, employee.id)}
                                    value={employee[property]}
                                    activeEdit={activeEdit}
                                    setActiveEdit={setActiveEdit}
                                />
                            );
                        }
                    }

                    //When that's done, add one more cell for actions (upload image/del row)
                    cells.push(
                        <td key={employee.id} className="action-col">
                            <button className="button" type="button" onClick={handleDelRow.bind(this, employee.id)}>
                                <img src="/img/delete-icon.png" alt="Delete Row" />
                            </button>
                            <input
                                className="file-input"
                                type="file"
                                id={'file-input-' + employee.id}
                                onChange={handleImageUpload.bind(this, employee.id)}
                            />
                            <label className="button" htmlFor={'file-input-' + employee.id}>
                                U
                            </label>
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
