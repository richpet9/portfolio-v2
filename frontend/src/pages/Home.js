import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ItemContainer from '../components/ItemContainer';

const Home = ({ match }) => {
    const [projects, setProjects] = useState(null);
    const [projectId, setProjectId] = useState(null);

    const fetchProjects = id => {
        const url = '/api/projects' + (id ? `/${id}` : '') + '?limit=' + 10;
        return fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText + url);
                } else {
                    return res;
                }
            })
            .then(res => res.json())
            .catch(err => {
                console.error(err);
            });
    };

    useEffect(() => {
        if (match.params.id) setProjectId(match.params.id);
        else setProjectId(null);

        fetchProjects(match.params.id).then(res => {
            setProjects(res);
        });
    }, [match.params]);

    return (
        <main id="app-container" style={{ display: 'flex' }}>
            <Filter />
            {projects ? projects.length > 1 ? <ItemContainer items={projects} /> : <p>hi</p> : ''}
        </main>
    );
};

export default Home;
