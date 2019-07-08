import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AppPage from './pages/App/App.js';
import EditPage from './pages/Edit/Edit.js';
import Header from './components/Header/Header.js';

//Non destructive array searching
let EmployeeList;

const RoutingContainer = () => {
    const [people, setPeople] = useState([]); //Container for our employee array
    const [loading, setLoading] = useState(true); //Whether or not the application shoudl display loading
    const [error, setError] = useState(null); //Whether or not to display error, and the message

    const status = { people: people, loading: loading, error: error }; //This variable just cleans up our components props

    //Handle posting data to the server
    const postData = data => {
        fetch('/api/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    console.error('ERROR POSTING DATA:LINE 20');
                    tryToGetError(err);
                } else return res.json();
            })
            //We don't need to call setPeople() here because this function is only
            // ever called from the EditPage, which handles updating the frontend by itself.
            //If/When AppPage is remounted, useEffect (below) will be called, which then calls setPeople()
            .then(data => {
                EmployeeList = data;
                console.log('Data post successful, server res: ', data);
            });
    };

    //Function to upload prof images
    const uploadImage = (file, id) => {
        let formData = new FormData();
        formData.append('file', file);
        fetch('/api/image-upload/' + id, {
            method: 'POST',
            body: formData
        }).then(res => {
            if (!res.ok) {
                console.error('ERROR UPLOADING IMAGE:LINE 46');
                tryToGetError(err);
            }
        });
    };

    const deleteImage = id => {
        fetch('api/image-upload/' + id + '/remove', {
            method: 'POST'
        }).then(res => {
            if (!res.ok) {
                console.error('ERROR DELETING IMAGE:LINE 57');
                tryToGetError(res);
            }
        });
    };

    //Handle searching stuff
    const setSearchQuery = value => {
        if (!loading) {
            setLoading(true);

            const filteredList = EmployeeList.filter(employee => {
                // This filter function checks if the search query matches the name, location, or
                // cell number and returns `true` if there is a match, which tells the above method
                // to add this employee to `filteredList`.
                if (employee.fullName.toLowerCase().includes(value.toLowerCase())) {
                    return true;
                }
                if (employee.loc.toLowerCase().includes(value.toLowerCase())) {
                    return true;
                }
                if (
                    employee.cell //Prettier, my make-things-look-nice plugin, made this look not nice
                        .toString()
                        .toLowerCase()
                        .includes(value.toLowerCase())
                ) {
                    return true;
                }
            });

            setError(filteredList.length <= 0 ? 'No results found for: ' + value : null);
            setPeople(filteredList);

            setLoading(false);
        }
    };

    useEffect(() => {
        fetch('/api/employees')
            .then(res => {
                if (!res.ok) throw new Error(res);
                else return res.json();
            })
            .then(data => {
                EmployeeList = data;
                setPeople(EmployeeList);
                setLoading(false);
            })
            .catch(err => {
                setError(
                    'Error occured when connecting to the database file, please refresh. Contact system administrator if this problem persists.'
                );
                setLoading(false);
                tryToGetError(err);
            });
    }, []);

    const tryToGetError = res => {
        try {
            return res.json().then(err => console.error('Error occured on server side: ', err.message));
        } catch (err) {
            console.error(
                'Unable to retrieve error message from server. It is likely this is just a 404 in a fetch() operation.\nCheck URLs in index.js and ensure the backend server.js is running.\n Error stack: '
            );
            console.log(err);
            console.log(res);
        }
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={props => <AppPage {...props} status={status} setSearchQuery={setSearchQuery} />} />
                <Route
                    path="/edit"
                    render={props => (
                        <EditPage
                            {...props}
                            status={status}
                            setPeople={setPeople}
                            postData={postData}
                            uploadImage={uploadImage}
                            deleteImage={deleteImage}
                        />
                    )}
                />
                <Route component={NoRoute} />
            </Switch>
        </Router>
    );
};

const NoRoute = () => {
    return (
        <h1>
            <Header />
            404: That page was not found!
        </h1>
    );
};

ReactDOM.render(<RoutingContainer />, document.getElementById('root'));
