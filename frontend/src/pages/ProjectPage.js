import React from 'react';
import { withRouter } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import Marked from 'marked';
import ProjectMetaInfo from '../components/ProjectMetaInfo';
import Renderer from '../util/renderer';
import { sanitizedAllowTags } from '../util';

const ProjectPage = ({ item }) => {
    return (
        <div className="single-blog-post">
            <ProjectMetaInfo />

            <div className="container">
                <h1 className="blog-post-title">{item.name}</h1>

                <div className="blog-post-img" style={{ backgroundImage: "url('" + item.img_url + "')" }}></div>

                <SanitizedHTML className="blog-post-long-body container" html={Marked(item.desc || '', { renderer: Renderer })} allowedTags={sanitizedAllowTags} />
            </div>
        </div>
    );
};

export default withRouter(ProjectPage);
