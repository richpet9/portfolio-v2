import React, { useState, useEffect } from 'react';
import Item from './Item';

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
                posts.map(post => (
                    <Item key={post.id} id={post.id} name={post.name} tags={post.tags} url={'/project/' + post.id + '/' + post.name.trim().replace(' ', '-')} />
                ))}
        </div>
    );
};

export default ItemContainer;
