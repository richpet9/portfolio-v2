import React from 'react';
import Marked from 'marked';

import './index.css';

// Make a renderer for marked
const renderer = new Marked.Renderer();

renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}" title="${title}">${text}` + '</a>';
};

const MarkdownBody = ({ markdown }) => {
    markdown = markdown || '';
    return <div className="markdown-body container" dangerouslySetInnerHTML={{ __html: Marked(markdown, { renderer: renderer }) }} />;
};

export default MarkdownBody;
