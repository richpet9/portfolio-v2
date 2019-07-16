import React, { useState } from 'react';
import './Button.css';

const Button = ({ classes, value, styles, tooltip, action, labelFor }) => {
    const [showTooltip, toggleTooltip] = useState(false);
    let tooltipEl;
    let buttonEl;
    let className = classes ? classes + ' button' : 'button';

    //If there is a tooltip prop, build the tooltip el
    if (tooltip) {
        tooltipEl = (
            <span
                ref={el => {
                    if (el) {
                        let width = el.getBoundingClientRect().width;
                        el.style.left = `calc(50% - (${width}px / 2))`;
                    }
                }}
                className={showTooltip ? 'show tooltip' : 'tooltip'}
            >
                {tooltip}
            </span>
        );
    }

    //If there's a labelFor prop, return a label
    if (labelFor) {
        buttonEl = (
            <label
                htmlFor={labelFor}
                type="button"
                className={className}
                style={styles}
                title={tooltip}
                onMouseEnter={() => toggleTooltip(true)}
                onMouseLeave={() => toggleTooltip(false)}
            />
        );
    } else {
        //Else return a button
        buttonEl = (
            <button
                type="button"
                className={className}
                style={styles}
                title={tooltip}
                onMouseEnter={() => toggleTooltip(true)}
                onMouseLeave={() => toggleTooltip(false)}
            >
                {value}
            </button>
        );
    }

    //Then return everything all together
    return (
        <div className="button-container" onClick={action}>
            {buttonEl}
            {tooltipEl}
        </div>
    );
};

export default Button;
