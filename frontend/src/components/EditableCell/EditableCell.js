import React, { useState } from 'react';
import './EditableCell.css';

const EditableCell = props => {
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState(props.value);

    const toggleInput = e => {
        if (!showInput) {
            setShowInput(true);
        }
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter' && showInput) {
            setShowInput(false);
            props.update();
        }
    };

    const handleInputChange = e => {
        setValue(e.target.value);
    };

    return (
        <td className={props.className} onClick={toggleInput} onKeyPress={handleKeyPress}>
            {showInput ? <input type="text" autoFocus className="table-input" defaultValue={value} onChange={handleInputChange} /> : ''}
            {value}
        </td>
    );
};

export default EditableCell;
