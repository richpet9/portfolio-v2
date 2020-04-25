import React, { useState, forwardRef } from 'react';

import './index.css';

const Button = (props, ref) => {
    let value = props.value || '';
    let onclick = props.onclick || (() => {});
    let disabled = props.disabled || false;
    let id = props.id || '';
    let className = [props.className || '', disabled ? 'disabled' : ''].join(' ');

    return (
        <div ref={ref} className={'button ' + className} id={id} onClick={disabled ? null : onclick} role="button">
            {value}
        </div>
    );
};

export default forwardRef(Button);
