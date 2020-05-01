import React from 'react';

import './index.css';

const Education = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">EDUCATION</h2>
            <div className="resume-body">
                <h4 className="resume-subhead">Quinnipiac University &mdash; Hamden, CT, May 2020</h4>
                <p>BA, Graphic + Interactive Design</p>
                <p>Minor: Computer Science</p>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">EXPERIENCE</h2>
            <div className="resume-body">
                <h4 className="resume-subhead">Quinnipiac University &mdash; Office of Integrated Marketing Communnications</h4>
                <p className="italic">Assistant Photographer</p>
                <p className="italic">Oct. 2017 &mdash; Present</p>
                <ul className="resume-list">
                    <li>Shoot University events for social media channels, branding & marketing, documentation, and publications</li>
                    <li>Use, organize, and maintain an online PhotoShelter server and local SAM server hosting University photos</li>
                </ul>

                <h4 className="resume-subhead">Viacom Inc. &mdash; Catalyst (Internal Creative Agency)</h4>
                <p className="italic">Digital Intern</p>
                <p className="italic">June 2019 &mdash; Aug. 2019</p>
                <ul className="resume-list">
                    <li>Implemented new website features using JavaScript, PHP, and Wordpress</li>
                    <li>Concieved, designed, and developed a department staff directory using the ReactJS framework</li>
                    <li>Leveraged Photoshop, Illustrator, and InDesign to create promotional content for social channels</li>
                    <li>Develop creative strategies for internal Viacom brands and events</li>
                    <li>Created designs and mockups for a new Catalyst brand identity</li>
                </ul>

                <h4 className="resume-subhead">The Agency at Quinnipiac (on-campus Advertising/PR firm for public accounts)</h4>
                <p className="italic">Web Designer, Graphic Designer, Photographer</p>
                <p className="italic">Sep. 2019 &mdash; Dec. 2019</p>
                <ul className="resume-list">
                    <li>Clients included The Discovery Museum of Bridgeport, CT and start-up manufacturer 3DuxDesigns</li>
                    <li>
                        Worked in client teams to develop marketing materials such as promotional photos, social media campaigns, Kickstarter campaigns, mass
                        communication copy, program guides and other informational documents
                    </li>
                    <li>Worked on-site to gather patron’s demographic information using Google Surveys</li>
                    <li>Designed and implemented website changes using Shopify</li>
                </ul>

                <h4 className="resume-subhead">Milan Rose Photography</h4>
                <p className="italic">Studio Photographer</p>
                <p className="italic">June 2017 &mdash; Aug. 2018</p>
                <ul className="resume-list">
                    <li>Work in-studio with poser shooting roughly 200 photos per day</li>
                    <li>Use Lightroom and Photoshop to organize, edit, and touch up photos</li>
                </ul>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">SKILLS</h2>
            <div className="resume-body">
                <h4 className="resume-subhead">Development</h4>
                <ul className="resume-list">
                    <li>Fluent in HTML, CSS, MySQL</li>
                    <li>Experience with PHP, Scala, and Python</li>
                    <li>Developed with Javascript libraries React, jQuery, TypeScript, and Express</li>
                    <li>Designing and implementing RESTful APIs</li>
                    <li>Managing a remote Linux machine through SSH and SFTP</li>
                    <li>Algorithm design & implementation in Java</li>
                </ul>
                <h4 className="resume-subhead">Design</h4>
                <ul className="resume-list">
                    <li>6 years of web design</li>
                    <li>4 years of graphic design and photography</li>
                </ul>
            </div>
        </div>
    );
};

const Honors = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">HONORS</h2>
            <div className="resume-body">
                <ul className="resume-list">
                    <li>Dean’s List — Fall 2016 to Spring 2020 Semesters</li>
                    <li>
                        Quinnipiac University Student Employee of the Year &mdash; March 2019
                        <span className="aside">Quinnipiac University</span>
                    </li>
                    <li>
                        Connecticut Student Employee of the Year &mdash; March 2019
                        <span className="aside">Northeast Association of Student Employment Administrators</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default () => (
    <div className="resume-container container">
        <Experience />
        <Education />
        <Skills />
        <Honors />
    </div>
);
