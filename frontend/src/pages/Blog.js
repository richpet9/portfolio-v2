import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SlidingButton from '../components/SlidingButton';
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

    useEffect(() => {
        if (match.params.subblog) {
            setSubBlogKey(matchUrlToKey(match.params.subblog));
        } else {
            setSubBlogKey(0);
        }
    });

    return (
        <main id="app-container">
            <div id="blog-filter-container">
                <p>SHOWING POSTS FROM</p>
                <SlidingButton activeButton={subBlogKey} options={['BOTH', 'MOBILE DESIGN', 'SENIOR PORTFOLIO']} urls={['', 'mobile-design', 'senior-portfolio']} />
            </div>
        </main>
    );
};

export default withRouter(Blog);
