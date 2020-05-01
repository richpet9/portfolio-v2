import React from 'react';
import MarkdownBody from '../MarkdownBody';
import { dateFormat } from '../../util';

import './index.css';

const BlogPost = ({ post }) => {
    window.scrollTo(0, 0);

    return (
        <div className="single-blog-post">
            <div className="container">
                <h1 className="blog-post-title">{post.name}</h1>
                <div className="blog-post-meta">
                    <div className="blog-post-cat">
                        {post.category
                            ? post.category.includes('-')
                                ? post.category.split('-').map((side) => {
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

            <MarkdownBody markdown={post.body} className={'container blog-post-long-body'} />
        </div>
    );
};
export default BlogPost;
