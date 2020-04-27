import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkdownBody from '../MarkdownBody';
import ProjectMetaInfo from './ProjectMetaInfo';

import './index.css';

const Project = ({ item }) => {
    let imgUrls = item.img_url ? item.img_url.split(',') : [];
    return (
        <div className="project-page-container">
            <div className="project-img-container">
                {imgUrls.map((url) => (
                    <img className="project-img" src={url} />
                ))}
            </div>
            <div className="project-info-container">
                <h1 className="project-title">{item.name}</h1>
                <ProjectMetaInfo item={item} />

                <div className="project-body-container">
                    <MarkdownBody markdown={item.body} className={'project-body'} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Project);
