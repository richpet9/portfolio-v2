import React from 'react';
import { dateFormat } from '../../../util';

import './index.css';

const ProjectMetaInfo = ({ info }) => {
    return (
        <div className="project-meta-container">
            <div className="project-meta-col">
                <div className="project-meta-entry">
                    <div className="project-meta-label">FINISHED</div>
                    <div className="project-meta-value">{dateFormat(new Date())}</div>
                </div>
                <div className="project-meta-entry">
                    <div className="project-meta-label">CATEGORY</div>
                    <div className="project-meta-value">Javascript, React</div>
                </div>
            </div>
            <div className="project-meta-col">
                <div className="project-meta-entry">
                    <div className="project-meta-label">CLIENT</div>
                    <div className="project-meta-value">Snakeskin Productions</div>
                </div>
                <div className="project-meta-entry">
                    <div className="project-meta-label">LINKS</div>
                    <div className="project-meta-value">
                        <a href="#" title="Full-size PDF">
                            Full-size PDF
                        </a>
                    </div>
                    <div className="project-meta-value">
                        <a href="#" title="Process Book">
                            Process Book
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMetaInfo;