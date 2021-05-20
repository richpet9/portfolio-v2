import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './index.scss';

export const Header = () => {
    return (
        <header id="header">
            <div id="name-container">
                <NavLink to="/" id="header-link" title="Home">
                    <h1 id="full-name">RICHARD PETROSINO</h1>
                    <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" title="Home">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" title="About">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" title="Contact">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export const BlogHeader = () => {
    // Blog header is the same as above except uses `a` tags instead of react routing
    // this is because we are techinically exiting the code bundle when we leave the blog
    return (
        <header id="header">
            <div id="name-container">
                <a href="/" id="header-link" title="Home">
                    <h1 id="full-name">RICHARD PETROSINO</h1>
                    <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/" title="Home">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="/about" title="About">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <NavLink to="/blog" title="Blog">
                            BLOG
                        </NavLink>
                    </li>
                    <li>
                        <a href="/contact" title="Contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(Header);
