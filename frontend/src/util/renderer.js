import Marked from 'marked';

// Make a renderer for marked
const renderer = new Marked.Renderer();
renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}" title="${title}">${text}` + '</a>';
};

export default renderer;
