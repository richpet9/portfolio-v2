import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProjectContainer from '../components/ProjectGrid';
import Project from '../components/Project';
import { getQueryParams } from '../util';

const connectError = (
    <h1 className="header center">
        Unable to connect to project database. <br />
        Please refresh or contact me!
    </h1>
);

const Home = ({ match, location }) => {
    const [projects, setProjects] = useState(null);
    const [sortedProjects, setSortedProjects] = useState(null);
    const [activeTags, setActiveTags] = useState([]);
    const [error, setError] = useState('');

    // This function fetches the posts from the database
    const fetchProjects = (id) => {
        const url = '/api/projects?limit=' + 10;
        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText + url);
                } else {
                    return res;
                }
            })
            .then((res) => {
                setError(false);
                return res.json();
            })
            .catch((err) => {
                console.warn('DB: ' + err);
                setError(connectError);
            });
    };

    const updateActiveTags = () => {
        // Get query params from URL
        if (!match.params.id) {
            let queryParams = getQueryParams(location.search);
            let tags = [];
            Object.keys(queryParams).forEach((param) => {
                tags = tags.concat(queryParams[param].toLowerCase().split(','));
            });

            setActiveTags(tags);
        }
    };

    // Whenever the active tags are changed
    useEffect(() => {
        if (projects) {
            let newProjects = projects.filter((project) => {
                let projectTags = project.tags.toLowerCase().split(',');
                let tagIntersect = projectTags.filter((tag) => activeTags.includes(tag));

                if (activeTags.length > 0) {
                    if (tagIntersect.length == activeTags.length) {
                        return true;
                    }
                } else {
                    return true;
                }
            });

            setSortedProjects(newProjects.length > 0 ? newProjects : null);
        }
    }, [activeTags]);

    // Whenever the Query params in the URL Change
    useEffect(() => {
        updateActiveTags();
    }, [location.search]);

    // Whenever the main URL path changes
    useEffect(() => {
        document.title = 'Richard Petrosino';

        fetchProjects().then((res) => {
            setProjects(res);
            setSortedProjects(res);
            updateActiveTags();
        });
    }, []);

    if (error) {
        return error;
    } else {
        return (
            <main id="app-container" style={{ display: 'flex' }}>
                {!match.params.id ? <Filter activeTags={activeTags} setActiveTags={setActiveTags} /> : ''}
                {sortedProjects && sortedProjects.length > 0 ? (
                    match.params.id ? (
                        <Project item={sortedProjects.filter((proj) => proj.id == match.params.id)[0]} />
                    ) : (
                        <ProjectContainer items={sortedProjects} />
                    )
                ) : sortedProjects ? (
                    <h1 className="header center">No posts found with that filter!</h1>
                ) : (
                    ''
                )}
            </main>
        );
    }
};

export default Home;
