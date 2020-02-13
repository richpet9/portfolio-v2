import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Marked from 'marked';
import SlidingButton from '../components/SlidingButton';
import BlogPostThumbnail from '../components/BlogPostThumbnail';
import SingleBlogPost from '../components/SingleBlogPost';
import { dateFormat, truncateString } from '../util';

const subBlogs = [
    {
        name: 'MOBILE DESIGN',
        url: 'mobile-design',
        key: 1
    },
    {
        name: 'SENIOR PORTFOLIO',
        url: 'senior-portfolio',
        key: 2
    }
];

const matchUrlToKey = url => {
    for (const blog of subBlogs) {
        if (blog.url === url) {
            return blog.key;
        }
    }
    return 0;
};

const Blog = ({ match }) => {
    const [subBlogKey, setSubBlogKey] = useState(matchUrlToKey(match.params.subblog));
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    const fetchPosts = (subblog, id) => {
        const url = '/api/blog-posts/' + (subblog ? (id ? subblog + '/' + id : subblog) : '');

        return fetch(url, {
            method: 'get'
        })
            .then(res => res.json())
            .catch(err => {
                console.error('Error fetching blog posts: ' + err);
                return [];
            });
    };

    useEffect(() => {
        if (match.params.subblog) {
            setSubBlogKey(matchUrlToKey(match.params.subblog));

            if (match.params.id) setPostId(match.params.id);
            else setPostId(null);
        } else {
            setSubBlogKey(0);
            setPostId(null);
        }

        fetchPosts(match.params.subblog, match.params.id).then(res => {
            setPosts(res);
        });
    }, [match.params]);

    return (
        <main id="app-container" style={{ textAlign: 'center' }}>
            <div id="blog-filter-container">
                <p>SHOWING POSTS FROM</p>
                <SlidingButton activeButton={subBlogKey} options={['BOTH', 'MOBILE DESIGN', 'SENIOR PORTFOLIO']} urls={['', 'mobile-design', 'senior-portfolio']} />
            </div>
            {posts && posts.length > 0 ? (
                postId ? (
                    <SingleBlogPost post={posts[0]} />
                ) : (
                    <div id="blog-posts-container">
                        {posts.map(post => {
                            const shortBody = Marked(truncateString(post.body, 250));
                            const postInfo = {
                                id: post.id,
                                name: post.name,
                                date: dateFormat(post.date),
                                shortBody: shortBody,
                                longBody: post.body,
                                category: post.category,
                                imgUrl: post.img_url
                            };

                            return <BlogPostThumbnail post={postInfo} key={post.id} />;
                        })}
                    </div>
                )
            ) : (
                <p style={{ fontSize: 24, marginTop: 28 }}>No posts to display.</p>
            )}
        </main>
    );
};

export default withRouter(Blog);
