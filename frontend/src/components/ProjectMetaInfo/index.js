import React from 'react';

import './index.css';

const ProjectMetaInfo = ({ info }) => {
    return (
        <div className="project-meta-container">
            <div className="project-meta-entry">
                <div className="project-meta-value">11/20/18</div>
                <div className="project-meta-label">Finished</div>
            </div>
            <div className="project-meta-entry">
                <div className="project-meta-value">Javascript, React</div>
                <div className="project-meta-label">Categories</div>
            </div>
            <div className="project-meta-entry">
                <div className="project-meta-value">Snakeskin Productions</div>
                <div className="project-meta-label">Client</div>
            </div>
            <div className="project-meta-entry">
                <div className="project-meta-value">Full-size PDF</div>
                <div className="project-meta-value">Process Book</div>
                <div className="project-meta-label">Links</div>
            </div>
        </div>
    );
};

export default ProjectMetaInfo;
