import React, { useEffect } from 'react';
import MarkdownBody from '../MarkdownBody';
import { dateFormat, truncateString } from '../../util';

import './index.scss';

const BlogPost = ({ post }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Set the OG tags to this posts's info
        let ogImage = document.querySelector('meta[property="og:image"]');
        let ogTitle = document.querySelector('meta[property="og:title"]');
        let ogDesc = document.querySelector('meta[property="og:description"]');
        let ogUrl = document.querySelector('meta[property="og:url"]');
        ogImage.setAttribute('content', post.img_url);
        ogTitle.setAttribute('content', "Richie's Blog: " + post.name);
        ogDesc.setAttribute('content', 'View ' + post.name + " on Richard Petrosino's blog. " + truncateString(post.shortBody, 40));
        ogUrl.setAttribute('content', 'https://richardpetrosino.com/blog/');
    }, []);

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
