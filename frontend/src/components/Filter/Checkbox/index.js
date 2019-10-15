import React, { useState } from 'react';
import './index.css';

const Checkbox = ({ value, pre }) => {
  const [active, setActive] = useState(pre ? pre : false); // Defautl state of checkbox

  const id = value.trim().toLowerCase();

  return (
    <label htmlFor={id} className="checkbox-label">
      <input
        type="checkbox"
        id={id}
        className="checkbox-input"
        checked={active}
        onChange={() => {
          if (active) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      />
      <span className="checkbox-label-text">{value}</span>
      <span className="checkbox-box" />
    </label>
  );
};

export default Checkbox;
