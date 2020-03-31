import React from 'react';
import { withRouter } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import Marked from 'marked';
import ProjectMetaInfo from './ProjectMetaInfo';
import Renderer from '../../util/renderer';
import { sanitizedAllowTags } from '../../util';

import './index.css';

const Project = ({ item }) => {
    return (
        <div className="project-container">
            <ProjectMetaInfo />

            <div className="project-body-container container">
                <h1 className="project-post-title">{item.name}</h1>
                <div className="project-post-img" style={{ backgroundImage: "url('" + item.img_url + "')" }}></div>
                <SanitizedHTML className="project-post-long-body container" html={Marked(item.desc || '', { renderer: Renderer })} allowedTags={sanitizedAllowTags} />
            </div>
        </div>
    );
};

export default withRouter(Project);
