import React from 'react';
import './Button.css';

const Button = ({ className, styles, tooltip, action, labelFor }) => {
    let tooltipEl;
    let buttonEl;

    if (tooltip) {
        tooltipEl = (
            <span
                ref={el => {
                    if (el) {
                        let width = el.getBoundingClientRect().width;
                        el.style.left = `calc(50% - (${width}px / 2))`;
                    }
                }}
                className="tooltip"
            >
                {tooltip}
            </span>
        );
    }

    if (labelFor) {
        buttonEl = <label htmlFor={labelFor} type="button" className={className} style={styles} title={tooltip} />;
    } else {
        buttonEl = <input type="button" className={className} style={styles} title={tooltip} />;
    }

    return (
        <div className="button-container" onClick={action}>
            {tooltipEl}
            {buttonEl}
        </div>
    );
};

export default Button;
