import React, { forwardRef } from 'react';

import './index.css';

const Input = (props, ref) => {
    let label, input;

    // Build the label
    if (props.label) {
        label = <span className="input-label">{props.label}</span>;
    }

    // Build the input
    if (props.type && props.type === 'textarea') {
        input = <textarea ref={ref} className="input-text" required={props.required} />;
    } else if (props.type && props.type === 'number') {
        input = <input ref={ref} type={props.type} className="input-text" value={props.value} min={props.min} max={props.max} required={props.required} />;
    } else {
        input = <input ref={ref} type={props.type} className="input-text" value={props.value} required={props.required} />;
    }

    return (
        <div
            className="input-container"
            onKeyPress={() => {
                ref.current.style.borderColor = '';
            }}
        >
            {props.label && label}
            {input}
        </div>
    );
};

export default forwardRef(Input);
