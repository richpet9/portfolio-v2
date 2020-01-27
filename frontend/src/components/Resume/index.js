import React from 'react';

import './index.css';

export const Education = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">Education</h2>
            <div className="resume-body">
                <h4 className="resume-subhead">Quinnipiac University &mdash; Expected May 2020, GPA: 3.9</h4>
                <p className="italic">Major: Graphic + Interactive Design; Minor: Computer Science</p>
            </div>
        </div>
    );
};

export const Experience = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">Professional Experience</h2>
            <div className="resume-body">
                <h4 className="resume-subhead">Viacom Inc. &mdash; Catalyst (Internal Creative Agency)</h4>
                <p className="italic">Digital Intern</p>
                <p className="italic">June 2019 &mdash; Aug. 2019</p>
                <ul className="resume-list">
                    <li>Developed an employee directory for internal company use with the React Javascript framework</li>
                    <li>Redesigned the Catalyst brand, created a pitch deck, and presented to department executives</li>
                    <li>Researched different CMS and event management options for Viacom at the corporate level</li>
                    <li>Leveraged WordPress to develop an internal portfolio for the Catalyst team, for intern creative reviews</li>
                </ul>

                <h4 className="resume-subhead">The Agency at Quinnipiac (on-campus Advertising/PR firm for public accounts)</h4>
                <p className="italic">Web Designer, Graphic Designer, Photographer</p>
                <p className="italic">Sep. 2019 &mdash; Dec. 2019</p>
                <ul className="resume-list">
                    <li>Clients included The Discovery Museum of Bridgeport and start-up manufacturer 3DuxDesigns </li>
                    <li>
                        Work in teams of 3-4 with client to develop marketing materials such as promotional photos, social media campaigns, Kickstarter campaigns, website
                        and mass communication copy, program guides and other informational documents
                    </li>
                    <li>Work on-site to gather patron’s demographic information using Google Surveys Design and implement website changes using Shopify </li>
                    <li>Manage the client’s social channels using MailChimp and asset creation in Photoshop, Illustrator, and InDesign</li>
                </ul>

                <h4 className="resume-subhead">Quinnipiac University &mdash; Integrated Marketing Communnications</h4>
                <p className="italic">Assistant Photographer</p>
                <p className="italic">Oct. 2017 &mdash; Present</p>
                <ul className="resume-list">
                    <li>Shoot University events for documentation, branding & marketing, social media channels and University publications (magazine, annual reports)</li>
                    <li>Use, organize, and maintain a PhotoShelter server hosting all the University photos</li>
                </ul>

                <h4 className="resume-subhead">Milan Rose Photography</h4>
                <p className="italic">Studio Photographer</p>
                <p className="italic">June 2017 &mdash; Aug. 2018</p>
                <ul className="resume-list">
                    <li>Worked in studio with a poser taking roughly 200 photos per day</li>
                    <li>Shot senior portraits, in-studio athletes, family photos and dance students</li>
                    <li>Used Lightroom and Photoshop to organize, edit, and touch up photos</li>
                </ul>
            </div>
        </div>
    );
};

export const Skills = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">Skills</h2>
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

export const Honors = () => {
    return (
        <div className="resume-section">
            <h2 className="resume-header">Honors</h2>
            <div className="resume-body">
                <ul className="resume-list">
                    <li>Quinnipiac University Student Employee of the Year — 2019</li>
                    <li>Connecticut Student Employee of the Year — 2019</li>
                </ul>
            </div>
        </div>
    );
};
