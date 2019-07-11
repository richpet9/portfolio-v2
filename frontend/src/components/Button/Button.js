import React from 'react';
import './Button.css';

const Button = ({ classes, value, styles, tooltip, action, labelFor }) => {
    let tooltipEl;
    let buttonEl;
    let className = classes ? classes + ' button' : 'button';

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
        buttonEl = (
            <button type="button" className={className} style={styles} title={tooltip}>
                {value}
            </button>
        );
    }

    return (
        <div className="button-container" onClick={action}>
            {buttonEl}
            {tooltipEl}
        </div>
    );
};

export default Button;
