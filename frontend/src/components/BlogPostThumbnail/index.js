import React from 'react';
import { Link } from 'react-router-dom';
import SanitizedHTML from 'react-sanitized-html';
import { makeUrl } from '../../util';

import './index.css';

const BlogPost = ({ post }) => {
    post.url = '/blog/' + post.category + '/' + post.id + '/' + makeUrl(post.name);
    return (
        <div className="blog-post" id={'blog-post-' + post.id}>
            <Link className="wrapper-link" to={post.url}>
                <div className="blog-post-img" style={{ backgroundImage: "url('" + post.imgUrl + "')" }}></div>
            </Link>
            <div className="blog-post-text">
                <Link className="wrapper-link" to={post.url}>
                    <h2 className="blog-post-name">{post.name}</h2>
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
                        <div className="blog-post-date">{post.date}</div>
                    </div>
                </Link>
                <SanitizedHTML className="blog-post-short-body" html={post.shortBody} allowedTags={['p', 'strong', 'b', 'em', 'i']} />
            </div>
        </div>
    );
};

export default BlogPost;
