import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SlidingButton from '../components/SlidingButton';
import BlogPost from '../components/BlogPost';

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
    if (str.length <= length) return str;

    while (str[length + 1] !== ' ') {
        length--;
    }

    return str.slice(0, length - 2) + '...';
};

const dateFormat = date => {
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

    const fetchPosts = limit => {
        return fetch('/api/blog/posts/' + (limit ? limit : ''), {
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
        } else {
            setSubBlogKey(0);
        }
        fetchPosts().then(res => {
            setPosts(res);
        });
    }, [match.params]);

    return (
        <main id="app-container" style={{ textAlign: 'center' }}>
            <div id="blog-filter-container">
                <p>SHOWING POSTS FROM</p>
                <SlidingButton activeButton={subBlogKey} options={['BOTH', 'MOBILE DESIGN', 'SENIOR PORTFOLIO']} urls={['', 'mobile-design', 'senior-portfolio']} />
            </div>
            <div id="blog-posts-container">
                {posts.map(post => {
                    const shortBody = truncateString(post.body, 200);
                    const postInfo = {
                        id: post.id,
                        name: post.name,
                        date: dateFormat(post.date),
                        shortBody: shortBody,
                        longBody: post.body,
                        category: post.category
                    };

                    return <BlogPost post={postInfo} key={post.id} />;
                })}
            </div>
        </main>
    );
};

export default withRouter(Blog);
