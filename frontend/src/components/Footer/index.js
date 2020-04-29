import React, { useEffect, useState } from 'react';

import './index.css';
import { withRouter } from 'react-router-dom';

const Footer = () => {
    const [opacity, setOpacity] = useState(0);

    // Fade in footer after a second so transitions dont look as wonky
    useEffect(() => {
        setOpacity(0);
        let int = setInterval(() => {
            setOpacity(1);
            clearInterval(int);
        }, 1000);
    }, [window.location.pathname]);

    return (
        <footer style={{ opacity: opacity }}>
            <ul>
                <li>
                    <a href="https://github.com/richpet9/portfolio-v2">Github</a>
                </li>
                <li>
                    <a href="mailto:richpet9@gmail.com">richpet9@gmail.com</a>
                </li>
                <li>
                    <p id="footer-copyright">&copy; 2020 Richard Petrosino</p>
                </li>
            </ul>
        </footer>
    );
};

export default withRouter(Footer);
