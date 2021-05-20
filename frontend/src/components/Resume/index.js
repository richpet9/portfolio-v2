import React from 'react';

import './index.scss';

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
                <h4 className="resume-subhead">Accrediation Council for Medical Affairs (ACMA)</h4>
                <p className="italic">Associate Creative Director, UX/Product Specialist</p>
                <p className="italic">December 2020 &mdash; Present</p>
                <ul className="resume-list">
                    <li>Designed a new brand identity and implemented new brand guidelines and imagery</li>
                    <li>Conduct customer research and compile insights on user journey and experience using Google Analytics, Mailchimp and our Learning Management System (LMS)</li>
                    <li>Oversee the transition and implementation of our legacy (Wordpress) web platforms to modern and scalable Javascript and AWS solutions; including creating product mockups, prototypes and final designs, and developer project management</li>
                    <li>Facilitate full-stack marketing strategies; from creative visual design and messaging to technical development, implementation and analysis, using Adobe Creative Cloud, and Google AdWords & Analytics</li>
                </ul>

                <h4 className="resume-subhead">Accrediation Council for Medical Affairs (ACMA)</h4>
                <p className="italic">Junior Full-Stack Developer</p>
                <p className="italic">July 2020 &mdash; December 2020</p>
                <ul className="resume-list">
                    <li>Developed and maintain various product sites across multiple domains</li>
                    <li>Designed web mockups, wireframes, and interactive prototypes for various web-based applications</li>
                    <li>Utilized Wordpress to create automated marketing integrations across display, email, and social channels</li>
                    <li>Provided external support for user of our Learning Management System (LMS)</li>
                </ul>

                <h4 className="resume-subhead">Quinnipiac University &mdash; Office of Integrated Marketing Communnications</h4>
                <p className="italic">Assistant Photographer</p>
                <p className="italic">Oct. 2017 &mdash; May 2020</p>
                <ul className="resume-list">
                    <li>Shot University events for social media channels, branding &amp; marketing, documentation, and publications</li>
                    <li>Used, organized, and maintained an online PhotoShelter and local SAM server hosting University photos</li>
                </ul>

                <h4 className="resume-subhead">Viacom Inc. &mdash; Catalyst (Internal Creative Agency)</h4>
                <p className="italic">Digital Intern</p>
                <p className="italic">June 2019 &mdash; Aug. 2019</p>
                <ul className="resume-list">
                    <li>Implemented new website features using JavaScript, PHP, and Wordpress</li>
                    <li>Conceived, designed, and developed a department staff directory using the ReactJS framework</li>
                    <li>Leveraged Photoshop, Illustrator, and InDesign to create promotional content for social channels</li>
                    <li>Developed creative strategies for internal Viacom brands and events</li>
                    <li>Created designs and mockups for a new Catalyst brand identity</li>
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
                <div className="flex">
                    <div className="resume-col">
                        <h4 className="resume-subhead">Proficient</h4>
                        <ul className="resume-list">
                            <li>Javascript ES6+, Python, PHP, Java, SQL, HTML5 and CSS</li>
                            <li>Libraries jQuery, React, Typescript, Node and Express</li>
                            <li>Databases PostgreSQL and MySQL</li>
                            <li>Messaging and brand development</li>
                            <li>Google Analytics</li>
                        </ul>
                    </div>
                    <div className="resume-col">
                        <h4 className="resume-subhead">Familiar</h4>
                        <ul className="resume-list">
                            <li>SSH, SFTP, DNS configuration, network management and related DevOps pipelines</li>
                            <li>NoSQL document-based systems</li>
                            <li>Amazon Web Services (S3, Cloudfront, Certificate Manager, Route 53, Lambda)</li>
                        </ul>
                    </div>
                    <div className="resume-col">
                        <h4 className="resume-subhead">Other Skills</h4>
                        <ul className="resume-list">
                            <li>Adobe Creative Cloud</li>
                            <li>Microsoft Office</li>
                            <li>Marketing automation</li>
                            <li>AdWords, Linkedin Campaigns</li>
                            <li>UI/UX Prototyping</li>
                            <li>Mailchimp</li>
                            <li>Knitting</li>
                        </ul>
                    </div>
                </div>
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
    <div className="container" id="resume-container">
        <div className="resume-link-container">
            <a className="highlight" href="https://cdn.richardpetrosino.com/doc/me/RichardPetrosino.pdf" title="Download my resume as a PDF">
                Download Resume as PDF
            </a>
        </div>
        <Education />
        <Experience />
        <Skills />
        <Honors />
    </div>
);
