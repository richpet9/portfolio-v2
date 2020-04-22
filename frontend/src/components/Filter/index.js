import React from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from './Checkbox';
import { getQueryParams } from '../../util';

import './index.css';

const Filter = (props) => {
    const tags = ['Print', 'PHP', 'Javascript', 'React', 'Brand', 'Logo', 'Typescript', 'Game'];
    const queryParams = getQueryParams(props.location.search);

    let activeCategory = [];
    let activeTags = [];

    if (queryParams.category) {
        activeCategory = queryParams.category.split(',');
    }
    if (queryParams.tags) {
        activeTags = queryParams.tags.split(',');
    }

    const updateCategory = (category) => {
        category = category.toLowerCase();
        // Check if any categories are currently active
        if (activeCategory.length > 0) {
            // Check if the active category includes this category
            if (activeCategory.includes(category)) {
                // If it does, remove this category (we unchecked a box)
                activeCategory = activeCategory.filter((item) => item !== category);
            } else {
                // If it doesnt, add this category (we checked a box)
                activeCategory.push(category);
            }
        } else {
            // If there are no active categories, make this the active only active category
            activeCategory = [category];
        }

        // Update hash params here
        updateHashParams(activeCategory, activeTags);
    };

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
        updateHashParams(activeCategory, activeTags);
    };

    const updateHashParams = (activeCategory, activeTags) => {
        let queryStr = '/?',
            tagStr,
            catStr;

        if (activeCategory && activeCategory.length > 0) {
            catStr = 'category=' + activeCategory.join(',');
        }

        if (activeTags && activeTags.length > 0) {
            tagStr = 'tags=' + activeTags.join(',');
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

        // Tell the root of the page to update the projects
        props.updateFilter(activeCategory, activeTags);
    };

    return (
        <div id="filter">
            <ul className="filter-group">
                <li className="filter-label">CATEGORIES</li>
                <li className="filter-checkbox">
                    <Checkbox value={'Code'} preChecked={activeCategory.includes('code')} onToggle={updateCategory.bind(this, 'code')} />
                </li>
                <li className="filter-checkbox">
                    <Checkbox value={'Design'} preChecked={activeCategory.includes('design')} onToggle={updateCategory.bind(this, 'design')} />
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
