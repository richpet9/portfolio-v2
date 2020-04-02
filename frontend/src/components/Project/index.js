import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkdownBody from '../MarkdownBody';
import ProjectMetaInfo from './ProjectMetaInfo';

import './index.css';

const Project = ({ item }) => {
    return (
        <div className="project-page-container">
            <div className="project-img" style={{ backgroundImage: "url('" + item.img_url + "')" }}></div>
            <div className="project-container">
                <ProjectMetaInfo item={item} />

                <div className="project-body-container container">
                    <h1 className="project-title">{item.name}</h1>
                    <MarkdownBody markdown={item.body} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Project);
