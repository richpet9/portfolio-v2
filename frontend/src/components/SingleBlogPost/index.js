import React from 'react';
import { dateFormat } from '../../pages/Blog';

import './index.css';

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
            <div className="blog-post-img"></div>
            <div className="blog-post-long-body">{post.body}</div>
        </div>
    );
};

export default SingleBlogPost;
