import React, { useState, useEffect, useRef } from 'react';
import './EditableCell.css';

const EditableCell = props => {
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState(props.value);
    const input = useRef();

    const toggleInput = e => {
        if (!showInput && !props.activeEdit) {
            setShowInput(true);
            props.setActiveEdit(true);
        }
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter' && showInput) {
            setShowInput(false);
            props.setActiveEdit(false);
            props.update();
        }
    };

    const handleClick = e => {
        if (showInput) {
            if (input.current.contains(e.target)) {
                //Clicked the current cell
                return;
            }
            //Clicked outside the active input
            setShowInput(false);
            props.setActiveEdit(false);
            props.update();
        }
    };

    const handleInputChange = e => {
        setValue(e.target.value);
    };

    useEffect(() => {
        //Event listener for when we click
        document.addEventListener('mousedown', handleClick);

        //Remove the listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    });

    return (
        <td className={props.className} id={props.id} onClick={toggleInput} onKeyPress={handleKeyPress}>
            {showInput && <input type="text" autoFocus className="table-input" defaultValue={value} onChange={handleInputChange} ref={input} />}
            {value}
        </td>
    );
};

export default EditableCell;
