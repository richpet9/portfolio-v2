import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProjectContainer from '../components/ProjectGrid';
import Project from '../components/Project';

const Home = ({ match }) => {
    const [projects, setProjects] = useState(null);
    const [sortedProjects, setSortedProjects] = useState(null);

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
                console.error(err);
            });
    };

    const updateFilter = (activeCategory, activeTags) => {
        let newProjects = projects.filter((project) => {
            let projectTags = project.tags.toLowerCase().split(',');
            let catIntersect = projectTags.filter((tag) => activeCategory.includes(tag));
            let tagIntersect = projectTags.filter((tag) => activeTags.includes(tag));

            if (activeCategory.length > 0 && activeTags.length > 0) {
                if (catIntersect.length > 0 && tagIntersect.length > 0) {
                    return true;
                }
            } else if (activeCategory.length > 0) {
                if (catIntersect.length > 0) {
                    return true;
                }
            } else if (activeTags.length > 0) {
                if (tagIntersect.length > 0) {
                    return true;
                }
            } else {
                return true;
            }
        });

        setSortedProjects(newProjects.length > 0 ? newProjects : null);
    };

    useEffect(() => {
        fetchProjects(match.params.id).then((res) => {
            setProjects(res);
            setSortedProjects(res);
        });
    }, [match.params.id]);

    return (
        <main id="app-container" style={{ display: 'flex' }}>
            {projects && projects.length > 1 ? <Filter updateFilter={updateFilter} /> : ''}
            {sortedProjects ? (
                sortedProjects.length > 1 ? (
                    <ProjectContainer items={sortedProjects} />
                ) : (
                    <Project item={sortedProjects[0]} />
                )
            ) : (
                'Error retrieving projects.'
            )}
        </main>
    );
};

export default Home;
