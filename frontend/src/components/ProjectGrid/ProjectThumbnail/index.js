import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Item = ({ url, name, tags, desc, thumbnail }) => {
    tags = tags.split(',');
    return (
        <div className="item">
            <div className="item-bg" style={{ backgroundImage: thumbnail ? 'url("' + thumbnail + '")' : '' }}></div>
            <Link className="item-link" to={url} title={desc}>
                <div className="item-meta">
                    <h1 className="item-name">{name}</h1>
                    <span className="item-tags">
                        {tags.map((tag) => {
                            return (
                                <span className="tag" key={tag}>
                                    {tag[0].toUpperCase() + tag.substring(1)}
                                </span>
                            );
                        })}
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default Item;
