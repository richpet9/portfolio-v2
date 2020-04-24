import React from 'react';

import './index.css';

const Input = (props) => {
    return (
        <div className="input-container">
            {props.label && <span className="input-label">{props.label}</span>}
            {props.type === 'text' && <input type={props.type} className="input-text" value={props.value} />}
            {props.type === 'textarea' && <textarea className="input-text" />}
            {props.type === 'number' && <input type={props.type} className="input-text" value={props.value} min={props.min} max={props.max} />}
        </div>
    );
};

export default Input;
