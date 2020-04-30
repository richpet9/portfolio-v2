import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProjectContainer from '../components/ProjectGrid';
import Project from '../components/Project';
import { FadeInComponent } from '../util/transition-router';
import { getQueryParams } from '../util';

const connectError = (
    <h1 className="header center">
        Unable to connect to project database. <br />
        Please refresh or contact me!
    </h1>
);

const Home = ({ match }) => {
    let location = window.location;

    const [projects, setProjects] = useState(null);
    const [sortedProjects, setSortedProjects] = useState(null);
    const [activeTags, setActiveTags] = useState([]);
    const [error, setError] = useState(false);

    // This function fetches the posts from the database
    const fetchProjects = () => {
        return new Promise((resolve, reject) => {
            const url = '/api/projects?limit=' + 10;

            setTimeout(() => reject('TIMEOUT 2000ms'), 2000);

            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(res.statusText + url);
                    } else {
                        return res;
                    }
                })
                .then((res) => {
                    resolve(res.json());
                })
                .catch((err) => {
                    reject(err);
                });
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

            setSortedProjects(newProjects);
        }
    }, [activeTags]);

    // Whenever the Query params in the URL Change
    useEffect(() => {
        updateActiveTags();
    }, [location.search]);

    // On first mount
    useEffect(() => {
        document.title = 'Richard Petrosino';

        fetchProjects()
            .then((res) => {
                setError(false);
                setProjects(res);
                setSortedProjects(res);
                updateActiveTags();
            })
            .catch((e) => {
                console.warn('PDB: ', e);
                setError(connectError);
            });
    }, []);

    return (
        <main id="app-container">
            <FadeInComponent show={error} timeout={200}>
                {error}
            </FadeInComponent>
            {!match.params.id ? <Filter activeTags={activeTags} setActiveTags={setActiveTags} /> : ''}
            <FadeInComponent show={sortedProjects} timeout={200}>
                {sortedProjects && sortedProjects.length > 0 ? (
                    match.params.id ? (
                        <Project item={sortedProjects.filter((proj) => proj.id == match.params.id)[0]} />
                    ) : (
                        <ProjectContainer items={sortedProjects} />
                    )
                ) : sortedProjects && sortedProjects.length == 0 ? (
                    <h1 className="header center">No posts found with that filter!</h1>
                ) : (
                    ''
                )}
            </FadeInComponent>
        </main>
    );
};

export default Home;
