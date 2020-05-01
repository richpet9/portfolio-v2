import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SlidingButton from '../components/SlidingButton';
import BlogPostThumbnail from '../components/BlogPostThumbnail';
import BlogPost from '../components/BlogPost';
import { dateFormat, truncateString } from '../util';

const subBlogs = [
    {
        name: 'MOBILE DESIGN',
        url: 'mobile-design',
        key: 1,
    },
    {
        name: 'SENIOR PORTFOLIO',
        url: 'senior-portfolio',
        key: 2,
    },
];

const matchUrlToKey = (url) => {
    for (const blog of subBlogs) {
        if (blog.url === url) {
            return blog.key;
        }
    }
    return 0;
};

const Blog = ({ match }) => {
    document.title = 'Richard Petrosino | Blog';

    const [subBlogKey, setSubBlogKey] = useState(matchUrlToKey(match.params.subblog));
    const [posts, setPosts] = useState([]);

    const fetchPosts = (subblog, id) => {
        const url = '/api/blog-posts/' + (subblog ? (id ? subblog + '/' + id : subblog) : '');

        return fetch(url, {
            method: 'get',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText + url);
                } else {
                    return res;
                }
            })
            .then((res) => res.json())
            .catch((err) => {
                console.error('Error fetching blog posts: ' + err);
                return [];
            });
    };

    useEffect(() => {
        if (match.params.subblog) {
            setSubBlogKey(matchUrlToKey(match.params.subblog));
        } else {
            setSubBlogKey(0);
        }

        fetchPosts(match.params.subblog, match.params.id).then((res) => {
            setPosts(res);
        });
    }, [match.params]);

    return (
        <main id="app-container" style={{ textAlign: 'center' }}>
            <div id="blog-filter-container">
                <p>SHOWING POSTS FROM</p>
                <SlidingButton
                    activeButton={subBlogKey}
                    options={['BOTH', 'MOBILE DESIGN', 'SENIOR PORTFOLIO']}
                    urls={['/blog', '/blog/mobile-design', '/blog/senior-portfolio']}
                />
            </div>
            {posts.length > 0 ? (
                posts.length > 1 ? (
                    <div id="blog-posts-container">
                        {posts.map((post) => {
                            post.date = dateFormat(post.date);
                            post.shortBody = truncateString(post.body, 250);
                            post.longBody = post.body;
                            post.imgUrl = post.img_url;

                            return <BlogPostThumbnail post={post} key={post.id} />;
                        })}
                    </div>
                ) : (
                    <BlogPost post={posts[0]} />
                )
            ) : (
                <p style={{ fontSize: 24, marginTop: 28 }}>No posts to display.</p>
            )}
        </main>
    );
};

export default withRouter(Blog);
