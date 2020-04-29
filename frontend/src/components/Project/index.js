import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import MarkdownBody from '../MarkdownBody';
import ProjectMetaInfo from './ProjectMetaInfo';

import './index.css';

const Project = ({ item }) => {
    let imgUrls = item.img_url ? item.img_url.split(',') : [];

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
        // When we unmount, reset imgUrls so we don't see
        // the wrong image on next load
        return () => {
            imgUrls = [];
        };
    }, []);

    return (
        <div className="project-page-container">
            <div className="project-img-container" style={imgUrls.length > 0 ? {} : { height: '100%', width: '55%' }}>
                {imgUrls.map((url) => (
                    <img className="project-img" key={url} src={url} />
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
