import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

const Header = () => {
  const navItems = ['Home', 'About', 'Contact', 'Photos'];
  return (
    <div id="header">
      <h1 id="full-name">RICHARD PETROSINO</h1>
      <nav>
        <ul>
          {navItems.map(nav => (
            <li key={nav}>
              <NavLink to={'/' + nav.toLowerCase()}>{nav}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Header);
