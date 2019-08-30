import React from 'react';
import './index.css';
import Checkbox from './Checkbox';

const Filter = () => {
  const tags = ['PHP', 'Javascript', 'React', 'Brand', 'Logo', 'Typescript'];

  return (
    <div id="filter">
      <ul className="filter-group">
        <li className="filter-label">CATEGORIES</li>
        <li className="filter-checkbox">
          <Checkbox value={'Code'} />
        </li>
        <li className="filter-checkbox">
          <Checkbox value={'Design'} />
        </li>
      </ul>
      <ul className="filter-group">
        <li className="filter-label">TAGS</li>
        {tags.map(tag => (
          <li key={tag} className="filter-checkbox">
            <Checkbox value={tag} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
