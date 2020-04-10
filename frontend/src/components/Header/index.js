import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <header id="header">
            <NavLink to="/" id="header-link" title="Home">
                <h1 id="full-name">RICHARD PETROSINO</h1>
                <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" title="Home">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" title="About">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <a href="/blog" title="Blog">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <NavLink to="/contact" title="Contact">
                            CONTACT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos" title="Photos">
                            PHOTOS
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
            <a href="/" id="header-link" title="Home">
                <h1 id="full-name">RICHARD PETROSINO</h1>
                <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/home" title="Home">
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
                    <li>
                        <a href="/photos" title="Photos">
                            PHOTOS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(Header);
