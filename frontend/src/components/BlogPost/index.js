import React from 'react';
import Marked from 'marked';
import SanitizedHTML from 'react-sanitized-html';
import Renderer from '../../util/renderer';
import { dateFormat, sanitizedAllowTags } from '../../util';

import './index.css';

const BlogPost = ({ post }) => {
    return (
        <div className="single-blog-post">
            <div className="container">
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
            </div>

            <div className="blog-post-img" style={{ backgroundImage: "url('" + post.img_url + "')" }}></div>

            <SanitizedHTML className="blog-post-long-body container" html={Marked(post.body, { renderer: Renderer })} allowedTags={sanitizedAllowTags} />
        </div>
    );
};
export default BlogPost;
