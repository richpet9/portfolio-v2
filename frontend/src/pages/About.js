import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        document.title = 'Richard Petrosino | About';
    }, []);

    return (
        <main className="container" id="about-container">
            <div className="about-photos-container">
                <div className="about-photo">
                    <img src="https://cdn.richardpetrosino.com/img/me/0.jpg" title="My photo, as taken by the boss while warming up for a shoot" />
                    <span className="about-photo-cap">
                        A warmup-photo, taken by my{' '}
                        <a href="http://autumnlind.com/" title="My boss">
                            boss
                        </a>
                        , during a pre-shoot lighting test.
                    </span>
                </div>
                <div className="about-photo">
                    <img src="https://cdn.richardpetrosino.com/img/me/3.jpg" title="My photo, as taken by the boss while warming up for a shoot" />
                    <span className="about-photo-cap">
                        At the base of one of{' '}
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
                    Hello. Hope you didn't almost forget about the {'<'}marquee> tag. Now you won't. Please use this information to your advantage, as such knowledge can
                    only be passed between developers during full moons. Go ahead, look outside. Hey, not too quick now, don't want to scare it. If there is not a full
                    moon, please refresh the page and try looking outside again. If that doesn't work, you may need to clear your cache. Just kidding. Javascript isn't
                    powerful enough to control the phases of the moon. Yet.
                </marquee>
                <p className="about-content">
                    Richie is a designer and developer based in New York and New Jersey. He is an experienced web developer who spends more time than he'd ever admit
                    inside VS Code documents tip-tapping away. He claims the process of going from blank text document to interactive website provides him sufficient
                    dopamine to wake up everyday, though these claims have not yet been confirmed.
                </p>
                <p className="about-content">
                    We have reasonable suspcision that he may suppliment this web-based dopamine release with the frequent hike, photo shoot, or occasional knitting
                    project. While these are all still theories, his portfolio does{' '}
                    <a href="https://old.richardpetrosino.com" title="View my photo portfolio">
                        showcase a number of photographs
                    </a>
                    , giving some credibitiy to at least one of those prospects.
                </p>
                <p className="about-content">
                    If you would like to contact Richie, feel free to reach out using the{' '}
                    <Link to="/contact" title="Go to the contact form">
                        on-site contact form
                    </Link>
                    , or the email at the bottom of this page.
                </p>
                <div className="about-photo">
                    <img src="https://cdn.richardpetrosino.com/img/me/1.jpg" title="I used to shoot a lot more film" />
                    <span className="about-photo-cap">Something I should be doing much more of</span>
                </div>
                <div className="about-photo">
                    <img src="https://cdn.richardpetrosino.com/img/me/2.jpg" title="My photo, as taken by the boss while warming up for a shoot" />
                    <span className="about-photo-cap">The woods</span>
                </div>
            </div>
        </main>
    );
};

export default About;
