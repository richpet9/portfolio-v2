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
        <div className="project-page-container">
            <div className="project-img" style={{ backgroundImage: "url('" + item.img_url + "')" }}></div>
            <div className="project-container">
                <ProjectMetaInfo item={item} />

                <div className="project-body-container container">
                    <h1 className="project-title">{item.name}</h1>
                    <SanitizedHTML className="project-long-body container" html={Marked(item.body || '', { renderer: Renderer })} allowedTags={sanitizedAllowTags} />
                </div>
            </div>
        </div>
    );
};

export default withRouter(Project);
