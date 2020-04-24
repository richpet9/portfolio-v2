import React from 'react';
import { Experience, Education, Skills, Honors } from '../components/Resume/';

const About = () => {
    document.title = 'Richard Petrosino | About';

    return (
        <main id="app-container">
            <div id="resume-container">
                <Education />
                <Experience />
                <Skills />
                <Honors />
            </div>
        </main>
    );
};

export default About;
