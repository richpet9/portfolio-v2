import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const SlidingButton = ({ activeButton, options, urls }) => {
    const computeLeft = (buttonIndex) => {
        let index = buttonIndex * 2;
        let res = 0;
        for (let i = 0; i < index; i++) {
            res += optionContainer.current.children[i].offsetWidth;
        }
        return res;
    };

    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [transition, setTransition] = useState('none');
    const optionContainer = useRef();

    const setProportions = () => {
        setWidth(optionContainer.current.children[activeButton * 2].offsetWidth);
        setHeight(optionContainer.current.offsetHeight);
        setLeft(computeLeft(activeButton));
    };

    useEffect(() => {
        // Make sure fonts are loaded before rendering/catch
        // fonts API doesn't work in every browser though, so wrap in try
        try {
            document.fonts.ready.then(() => {
                setProportions();
                // First time render only, makes sure the bar doesnt appear when getting into position
                if (opacity === 0 && transition === 'none') {
                    setTimeout(() => {
                        setOpacity(1);
                        setTransition('all 300ms cubic-bezier(0.165, 0.84, 0.44, 1)');
                    }, 50);
                }
            });
        } catch (e) {
            setProportions();
            // First time render only, makes sure the bar doesnt appear when getting into position
            if (opacity === 0 && transition === 'none') {
                setTimeout(() => {
                    setOpacity(1);
                    setTransition('all 300ms cubic-bezier(0.165, 0.84, 0.44, 1)');
                }, 50);
            }
        }
    }, [activeButton]);

    return (
        <div className="sliding-button-container">
            <ul ref={optionContainer}>
                {options.map((option, index) => {
                    const className = activeButton === index ? 'active' : '';
                    let res = [
                        <li key={index}>
                            <Link to={urls[index] ? urls[index] : '#'} className={className}>
                                {option}
                            </Link>
                        </li>,
                    ];
                    if (index !== options.length - 1) {
                        res.push(
                            <li key={index + 1 * index + 1} className="divider" style={{ height: height }}>
                                <span></span>
                            </li>
                        );
                    }

                    return res;
                })}
            </ul>
            <span className="sliding-button-bg" style={{ left: left, width: width, height: height, opacity: opacity, transition: transition }}>
                <span className="sliding-button-bg-edges"></span>
            </span>
        </div>
    );
};

export default SlidingButton;
