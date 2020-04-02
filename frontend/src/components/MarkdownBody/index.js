import React from 'react';
import Marked from 'marked';
import SanitizedHTML from 'react-sanitized-html';
import Renderer from '../../util/renderer';
import { sanitizedAllowTags } from '../../util';

import './index.css';

const MarkdownBody = ({ markdown }) => {
    return <SanitizedHTML className="markdown-body container" html={Marked(markdown, { renderer: Renderer })} allowedTags={sanitizedAllowTags} />;
};

export default MarkdownBody;
