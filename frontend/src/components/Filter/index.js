import React from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from './Checkbox';

import './index.css';

const Filter = (props) => {
    const tags = ['Print', 'PHP', 'Javascript', 'React', 'Brand', 'Logo', 'Python', 'Java', 'Game'];
    let { activeTags } = props;

    const updateTags = (tag) => {
        tag = tag.toLowerCase();
        // Check if any categories are currently active

        if (activeTags.length > 0) {
            // Check if the active category includes this category
            if (activeTags.includes(tag)) {
                // If it does, remove this category (we unchecked a box)
                activeTags = activeTags.filter((item) => item !== tag);
            } else {
                // If it doesnt, add this category (we checked a box)
                activeTags.push(tag);
            }
        } else {
            // If there are no active categories, make this the active only active category
            activeTags = [tag];
        }

        // Update hash params here
        updateHashParams(activeTags);
    };

    const updateHashParams = (activeTags) => {
        let queryStr = '/?',
            tagStr,
            catStr;

        if (activeTags && activeTags.length > 0) {
            let categoryScrape = activeTags.filter((tag) => tag === 'code' || tag === 'design');

            if (categoryScrape.length > 0) {
                catStr = 'category=' + (categoryScrape.length > 1 ? categoryScrape.join(',') : categoryScrape[0]);
                activeTags = activeTags.filter((tag) => !categoryScrape.includes(tag));
            }

            if (activeTags.length > 0) {
                tagStr = 'tags=' + activeTags.join(',');
            }
        }

        if (catStr && tagStr) {
            queryStr += [catStr, tagStr].join('&');
        } else if (catStr) {
            queryStr += catStr;
        } else if (tagStr) {
            queryStr += tagStr;
        } else {
            queryStr = '';
        }

        // Update the browser's URL
        props.history.push(queryStr);
    };

    return (
        <div id="filter">
            <ul className="filter-group">
                <li className="filter-label">CATEGORIES</li>
                <li className="filter-checkbox">
                    <Checkbox value={'Code'} preChecked={activeTags.includes('code')} onToggle={updateTags.bind(this, 'code')} />
                </li>
                <li className="filter-checkbox">
                    <Checkbox value={'Design'} preChecked={activeTags.includes('design')} onToggle={updateTags.bind(this, 'design')} />
                </li>
            </ul>
            <ul className="filter-group">
                <li className="filter-label">TAGS</li>
                {tags.map((tag) => (
                    <li key={tag} className="filter-checkbox">
                        <Checkbox value={tag} preChecked={activeTags.includes(tag.toLowerCase())} onToggle={updateTags.bind(this, tag)} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default withRouter(Filter);
