import React from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from './Checkbox';
import { getQueryParams } from '../../util';

import './index.css';

const Filter = (props) => {
    const queryParams = getQueryParams(props.location.search);

    let activeCategory = [];
    let activeTags = [];

    if (queryParams.category) {
        activeCategory = queryParams.category.split(',');
    }
    if (queryParams.tags) {
        activeTags = queryParams.tags.split(',');
    }

    const tags = ['PHP', 'Javascript', 'React', 'Brand', 'Logo', 'Typescript', 'Game'];

    const updateCategory = (category) => {
        props.history.push('/?hi');
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
                        <Checkbox value={tag} preChecked={activeTags.includes(tag.toLowerCase())} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default withRouter(Filter);
