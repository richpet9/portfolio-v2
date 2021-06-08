import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const AboutMe = () => (
    <div className="about-me-container">
        <div className="about-photos-container">
            <div className="about-photo">
                <img src="https://cdn.richardpetrosino.com/img/me/0.jpg" title="My photo, as taken by the boss while warming up for a shoot" />
                <span className="about-photo-cap">
                    A warm-up photo, taken by my{' '}
                    <a href="http://autumnlind.com/" title="My boss">
                        boss
                    </a>
                    , during a pre-shoot lighting test.
                </span>
            </div>
            <div className="about-photo">
                <img src="https://cdn.richardpetrosino.com/img/me/3.jpg" title="At the base of a ravine" />
                <span className="about-photo-cap">
                    Taken by Mike. At the base of one of{' '}
                    <a href="https://en.wikipedia.org/wiki/The_Three_Sisters_(Alberta)" title="Wikipedia article for The Three Sisters">
                        The Three Sisters
                    </a>
                    , Canmore, AB.
                </span>
            </div>
        </div>

        <div className="about-content-container">
            <h1 className="header">About Richie</h1>
            <marquee>
                Hello. Please don't forget about the {'<'}marquee{'>'} tag.
            </marquee>

            <p className="about-content">
                My day-to-day consists of innovating brand creative imagery and facilitating the design, development, and
                implementation of websites and their network infrastructures. Along the way I manage integrated marketing
                between the brand, it's customers, and the various channels in which they interact, including: websites,
                email, paid advertisements, and social media.
            </p>

            <p className="about-content">
                If you would like to contact me, feel free to reach out using the{' '}
                <Link className="highlight" to="/contact" title="Go to the contact form">
                    on-site contact form
                </Link>
                , or the email at the bottom of this page. You can also find me at these fine sites:
            </p>

            <div className="center">
                <ul className="about-contact-info">
                    <li>
                        <a href="https://github.com/richpet9" className="highlight about-content" title="Visit my Github">
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/petrotography" className="highlight about-content" title="Visit my Instagram">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/richard-petrosino-15921b156/" className="highlight about-content" title="Visit my LinkedIn">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default AboutMe;
