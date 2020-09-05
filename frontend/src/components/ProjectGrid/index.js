import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import { makeUrl, truncateString } from '../../util';

import './index.scss';

const ProjectGrid = ({ items }) => {
    return (
        <div className="project-thumbnail-container">
            {items &&
                items.map((item) => {
                    const url = '/project/' + item.id + '/' + makeUrl(item.name);
                    return (
                        <ProjectThumbnail key={item.id} name={item.name} tags={item.tags} url={url} thumbnail={item.thumbnail} desc={truncateString(item.body, 100)} />
                    );
                })}
        </div>
    );
};

export default ProjectGrid;
