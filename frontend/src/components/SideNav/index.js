import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const SideNav = (props) => {
    return (
        <div className="side-nav-container">
            <ul>
                {props.items.map((item) => (
                    <li key={item}>
                        <Link to={'/about#' + item.toLowerCase()}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideNav;
