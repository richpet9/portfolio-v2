import React from 'react';
import './index.css';

const Checkbox = ({ value }) => {
  const id = value.trim().toLowerCase();
  return (
    <label htmlFor={id} className="checkbox-label">
      <input type="checkbox" id={id} className="checkbox-input" />
      <span className="checkbox-label-text">{value}</span>
      <span className="checkbox-box" />
    </label>
  );
};

export default Checkbox;
