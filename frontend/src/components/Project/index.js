import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import MarkdownBody from '../MarkdownBody';
import ProjectMetaInfo from './ProjectMetaInfo';
import { truncateString } from '../../util';

import './index.scss';

const Project = ({ item }) => {
    const [style, setStyle] = useState(true);

    let imgUrls = item.img_url ? item.img_url.split(',') : [];

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
        // Set the OG tags to this project's info
        let ogImage = document.querySelector('meta[property="og:image"]');
        let ogTitle = document.querySelector('meta[property="og:title"]');
        let ogDesc = document.querySelector('meta[property="og:description"]');
        let ogUrl = document.querySelector('meta[property="og:url"]');
        ogImage.setAttribute('content', item.thumbnail);
        ogTitle.setAttribute('content', "Richie's Portfolio: " + item.name);
        ogDesc.setAttribute('content', 'View ' + item.name + " on Richard Petrosino's portfolio. " + truncateString(item.body, 40));
        ogUrl.setAttribute('content', 'https://richardpetrosino.com/project/' + item.id);

        // When we unmount, reset imgUrls so we don't see
        // the wrong image on next load
        return () => {
            imgUrls = [];
        };
    }, []);

    return (
        <div className="project-page-container">
            <div className="project-img-container" style={style ? { height: '600px', width: '55%' } : {}}>
                {imgUrls.map((url) => (
                    <img className="project-img" key={url} src={url} onLoad={() => setStyle(false)} />
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
