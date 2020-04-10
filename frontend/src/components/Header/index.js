import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import './index.css';

const Header = () => {
    return (
        <header id="header">
            <NavLink to="/" id="header-link">
                <h1 id="full-name">RICHARD PETROSINO</h1>
                <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                    <li>
                        <a href="/blog">BLOG</a>
                    </li>
                    <li>
                        <NavLink to="/contact">CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos">PHOTOS</NavLink>
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
            <a href="/" id="header-link">
                <h1 id="full-name">RICHARD PETROSINO</h1>
                <h4 id="subhead">DESIGN + DEVELOPMENT</h4>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/home">HOME</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT</a>
                    </li>
                    <li>
                        <NavLink to="/blog">BLOG</NavLink>
                    </li>
                    <li>
                        <a href="/contact">CONTACT</a>
                    </li>
                    <li>
                        <a href="/photos">PHOTOS</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(Header);
