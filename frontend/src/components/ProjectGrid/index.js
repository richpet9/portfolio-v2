import React, { useState, useEffect } from 'react';
import Item from './ProjectThumbnail';
import { makeUrl } from '../../util';

import './index.css';

const ProjectThumbnail = ({ items }) => {
    return (
        <div className="project-container">
            {items &&
                items.map(item => {
                    const url = '/project/' + item.id + '/' + makeUrl(item.name);
                    return <Item key={item.id} id={item.id} name={item.name} tags={item.tags} url={url} />;
                })}
        </div>
    );
};

export default ProjectThumbnail;
