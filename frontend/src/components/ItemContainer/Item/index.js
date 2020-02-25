import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Item = ({ url, id, name, tags, desc }) => {
    return (
        <div className="item" id={'item-' + id}>
            <div className="item-bg"></div>
            <Link className="item-link" to={url} title={desc}>
                <div className="item-meta">
                    <h1 className="item-name">{name}</h1>
                    <span className="item-tags">{tags}</span>
                    <p>{desc}</p>
                </div>
            </Link>
        </div>
    );
};

export default Item;
