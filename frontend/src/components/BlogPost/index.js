import React from 'react';

import './index.css';

const BlogPost = ({ post }) => {
    post.url = '/blog/' + post.category + '/' + post.name.toLowerCase().replace(/ /g, '-');
    return (
        <div className="blog-post" id={'blog-post-' + post.id}>
            <a className="wrapper-link" href={post.url}>
                <div className="blog-post-img"></div>
            </a>
            <div className="blog-post-text">
                <a className="wrapper-link" href={post.url}>
                    <h2 className="blog-post-name">{post.name}</h2>
                    <div className="blog-post-meta">
                        <div className="blog-post-cat">
                            {post.category.split('-').map(side => {
                                return side[0].toUpperCase() + side.slice(1) + ' ';
                            })}
                        </div>
                        <span className="hline"></span>
                        <div className="blog-post-date">{post.date}</div>
                    </div>
                </a>
                <div className="blog-post-short-body">{post.shortBody}</div>
            </div>
        </div>
    );
};

export default BlogPost;
