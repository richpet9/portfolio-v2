import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import { makeUrl } from '../../util';

import './index.css';

const ProjectGrid = ({ items }) => {
    return (
        <div className="project-thumbnail-container">
            {items &&
                items.map((item) => {
                    console.log(item);

                    const url = '/project/' + item.id + '/' + makeUrl(item.name);
                    return <ProjectThumbnail key={item.id} name={item.name} tags={item.tags} url={url} thumbnail={item.thumbnail} />;
                })}
        </div>
    );
};

export default ProjectGrid;
