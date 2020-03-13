import React, { useState, useEffect } from 'react';
import Item from './Item';
import { makeUrl } from '../../util';

import './index.css';

const ItemContainer = ({ numItems }) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('/api/projects/' + numItems)
            .then(res => res.json())
            .then(res => {
                setPosts(res);
            });
    }, []);

    return (
        <div id="item-container">
            {posts &&
                posts.map(post => {
                    const url = '/project/' + post.id + '/' + makeUrl(post.name);
                    return <Item key={post.id} id={post.id} name={post.name} tags={post.tags} url={url} />;
                })}
        </div>
    );
};

export default ItemContainer;
