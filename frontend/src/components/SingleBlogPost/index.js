import React from 'react';
import Marked from 'marked';

import SanitizedHTML from 'react-sanitized-html';
import { dateFormat } from '../../pages/Blog';

import './index.css';

const sanitizeAllowTags = ['a', 'h1', 'h2', 'h3', 'p', 'i', 'em', 'b', 'strong'];

const SingleBlogPost = ({ post }) => {
    return (
        <div className="single-blog-post">
            <h1 className="blog-post-title">{post.name}</h1>
            <div className="blog-post-meta">
                <div className="blog-post-cat">
                    {post.category
                        ? post.category.includes('-')
                            ? post.category.split('-').map(side => {
                                  return side[0].toUpperCase() + side.slice(1) + ' ';
                              })
                            : post.category
                        : 'No Category'}
                </div>
                <span className="vline"></span>
                <div className="blog-post-date">{dateFormat(post.date)}</div>
            </div>
            <hr />
            <div className="blog-post-img" style={{ backgroundImage: "url('" + post.img_url + "')" }}></div>
            <SanitizedHTML className="blog-post-long-body" html={Marked(post.body)} allowedTags={sanitizeAllowTags} />
        </div>
    );
};
export default SingleBlogPost;
