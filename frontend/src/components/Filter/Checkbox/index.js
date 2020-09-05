import React, { useState, useEffect } from 'react';
import './index.scss';

const Checkbox = ({ value, preChecked, onToggle }) => {
    const [active, setActive] = useState(preChecked ? preChecked : false); // Defautl state of checkbox
    const id = value.trim().toLowerCase();

    const toggleActive = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
        onToggle();
    };

    useEffect(() => {
        setActive(preChecked);
    }, [preChecked]);

    return (
        <label htmlFor={id} className={'checkbox-label' + (active ? ' active' : '')}>
            <input type="checkbox" id={id} className={'checkbox-input'} checked={active} onChange={toggleActive} />
            <span className="checkbox-label-text">{value}</span>
            <span className="checkbox-box" />
        </label>
    );
};

export default Checkbox;
