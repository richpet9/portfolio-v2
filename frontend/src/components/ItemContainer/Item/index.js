import React from 'react';

import './index.css';

const Item = ({ url, id, name, tags, desc }) => {
    return (
        <div className="item" id={'item-' + id}>
            <div className="item-bg"></div>
            <a className="item-link" href={url} title={desc}>
                <div className="item-meta">
                    <h1 className="item-name">{name}</h1>
                    <span className="item-tags">{tags}</span>
                    <p>{desc}</p>
                </div>
            </a>
        </div>
    );
};

export default Item;
