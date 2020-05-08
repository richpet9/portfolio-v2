import React, { useEffect } from 'react';
import AboutMe from '../components/AboutMe';
import Resume from '../components/Resume';
import SlidingButton from '../components/SlidingButton';
import { withRouter } from 'react-router-dom';

const About = ({ match }) => {
    useEffect(() => {
        document.title = 'Richard Petrosino | ' + (match.params.resume ? 'Resume' : 'About Me');
    }, [match.params.resume]);

    return (
        <main className="container" id="about-container">
            <a id="space-cat" href="https://space-cat.richardpetrosino.com" title="Follow the space-cat">
                <img src="https://space-cat.richardpetrosino.com/svg/space-cat.svg" />
            </a>
            <div style={{ width: '100%', textAlign: 'center' }}>
                <div id="about-filter-container">
                    <SlidingButton activeButton={match.params.resume ? 1 : 0} options={['ABOUT ME', 'RESUME']} urls={['/about', '/about/resume']} />
                </div>
            </div>
            {match.params.resume ? <Resume /> : <AboutMe />}
        </main>
    );
};

export default withRouter(About);
