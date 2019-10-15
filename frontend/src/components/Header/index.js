import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

const Header = () => {
  const navItems = ['Home', 'About', 'Contact', 'Photos'];
  return (
    <div id="header">
      <NavLink to="/" id="header-link">
        <h1 id="full-name">RICHARD PETROSINO</h1>
        <h4 id="subhead">DESIGN+DEV</h4>
      </NavLink>
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
