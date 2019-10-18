import React from 'react';
import SideNav from '../components/SideNav/';
import { Experience, Education, Skills, Honors } from '../components/Resume/';

const About = props => {
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
