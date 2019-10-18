import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

const Header = () => {
  const navItems = ['Home', 'About', 'Contact', 'Photos'];
  return (
    <header id="header">
      <NavLink to="/" id="header-link">
        <h1 id="full-name">RICHARD PETROSINO</h1>
      </NavLink>
      <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
      <nav>
        <ul>
          {navItems.map(nav => (
            <li key={nav}>
              <NavLink to={'/' + nav.toLowerCase()}>{nav.toUpperCase()}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
