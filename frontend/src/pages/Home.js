import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProjectContainer from '../components/ProjectGrid';
import Project from '../components/Project';
import { getQueryParams } from '../util';

const Home = ({ match, location }) => {
    document.title = 'Richard Petrosino';

    const [projects, setProjects] = useState(null);
    const [sortedProjects, setSortedProjects] = useState(null);
    const [activeTags, setActiveTags] = useState([]);
    const [error, setError] = useState(null);

    const fetchProjects = (id) => {
        const url = '/api/projects' + (id ? `/${id}` : '') + '?limit=' + 10;
        return fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText + url);
                } else {
                    return res;
                }
            })
            .then((res) => res.json())
            .catch((err) => {
                setError(
                    <h1 className="error">
                        Unable to connect to project database. <br />
                        Please refresh or contact me!
                    </h1>
                );
            });
    };

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

    useEffect(() => {
        // Get query params from URL
        if (!match.params.id) {
            let queryParams = getQueryParams(location.search);
            let tags = [];
            Object.keys(queryParams).forEach((param) => {
                tags = tags.concat(queryParams[param].toLowerCase().split(','));
            });

            setActiveTags(tags);
        }
    }, [location.search]);

    useEffect(() => {
        fetchProjects(match.params.id).then((res) => {
            setProjects(res);
            setSortedProjects(res);
        });
    }, [match.params.id]);

    return (
        <main id="app-container" style={{ display: 'flex' }}>
            {!match.params.id ? <Filter activeTags={activeTags} setActiveTags={setActiveTags} /> : ''}
            {error ? (
                error
            ) : sortedProjects && sortedProjects.length > 0 ? (
                match.params.id ? (
                    <Project item={sortedProjects[0]} />
                ) : (
                    <ProjectContainer items={sortedProjects} />
                )
            ) : (
                <h1 className="header center">No posts found with that filter!</h1>
            )}
        </main>
    );
};

export default Home;
