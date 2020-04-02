import React from 'react';
import { dateFormat } from '../../../util';

import './index.css';

const ProjectMetaInfo = ({ item }) => {
    let links = item.links ? item.links.split(',') : [];
    let tags = item.tags ? item.tags.split(',') : [];

    // Style the array of links
    if (item && item.links) {
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            let delimIndex = link.indexOf(']');
            let linkCopy = link.substring(1, delimIndex);
            let linkUrl = link.substring(delimIndex + 2, link.length - 1);

            links[i] = (
                <div className="project-meta-value" key={delimIndex}>
                    <a href={linkUrl} title="Process Book">
                        {linkCopy}
                    </a>
                </div>
            );
        }
    }

    // Style the tags array
    if (item && item.tags) {
        for (let i = 0; i < tags.length; i++) {
            let tag = tags[i];

            tags[i] = (
                <div className="project-meta-value tag">
                    <a href={'/home?tags=' + tag} title="Process Book">
                        {tag}
                    </a>
                    &nbsp;
                </div>
            );
        }
    }

    // If no links, display that
    if (links.length == 0) {
        links = <div>None</div>;
    }
    // If not tags, display that too
    if (tags.length == 0) {
        tags = <div>None</div>;
    }

    return (
        <div className="project-meta-container">
            <div className="project-meta-col">
                <div className="project-meta-entry">
                    <div className="project-meta-label">FINISHED</div>
                    <div className="project-meta-value">{dateFormat(item && item.date ? item.date : new Date(0))}</div>
                </div>
                <div className="project-meta-entry">
                    <div className="project-meta-label">CATEGORY</div>
                    {tags}
                </div>
            </div>
            <div className="project-meta-col">
                <div className="project-meta-entry">
                    <div className="project-meta-label">CLIENT</div>
                    <div className="project-meta-value">{item && item.client ? item.client : 'None'}</div>
                </div>
                <div className="project-meta-entry">
                    <div className="project-meta-label">LINKS</div>
                    {links}
                </div>
            </div>
        </div>
    );
};

export default ProjectMetaInfo;
