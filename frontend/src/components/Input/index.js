import React, { forwardRef } from 'react';

import './index.css';

const Input = (props, ref) => {
    return (
        <div className="input-container">
            {props.label && <span className="input-label">{props.label}</span>}
            {props.type === 'text' && <input ref={ref} type={props.type} className="input-text" value={props.value} />}
            {props.type === 'textarea' && <textarea ref={ref} className="input-text" />}
            {props.type === 'number' && <input ref={ref} type={props.type} className="input-text" value={props.value} min={props.min} max={props.max} />}
        </div>
    );
};

export default forwardRef(Input);
