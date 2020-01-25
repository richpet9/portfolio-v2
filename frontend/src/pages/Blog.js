import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SlidingButton from '../components/SlidingButton';
import BlogPost from '../components/BlogPost';
import SingleBlogPost from '../components/SingleBlogPost';

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

const truncateString = (str, length) => {
    if (!str || str.length <= length) return str;

    while (str[length + 1] !== ' ') {
        length--;
    }

    return str.slice(0, length - 2) + '...';
};

export const dateFormat = date => {
    if (typeof date !== Date) {
        date = new Date(date);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    return months[month] + ' ' + day + ', ' + year;
};

const Blog = ({ match }) => {
    const [subBlogKey, setSubBlogKey] = useState(matchUrlToKey(match.params.subblog));
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState(null);

    const fetchPosts = (category, id) => {
        const url = '/api/blog-posts/' + (category ? (id ? category + '/' + id : category) : '');
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
                            const shortBody = truncateString(post.body, 200);
                            console.log(post);

                            const postInfo = {
                                id: post.id,
                                name: post.name,
                                date: dateFormat(post.date),
                                shortBody: shortBody,
                                longBody: post.body,
                                category: post.category,
                                imgUrl: post.img_url
                            };

                            return <BlogPost post={postInfo} key={post.id} />;
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
