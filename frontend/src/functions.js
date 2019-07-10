//PROMISE function which attempts to get an error code from the server upon a failed connection
//If an error code cannot be parsed, it means the server responded with either 404 (not found) or
// with a 500 (internal routing). Both of these can be caused by bad URLs, or errors in the server.js
export function tryToGetError(res) {
    try {
        return res.json().then(err => console.error('Error occured on server side: ', err.message));
    } catch (err) {
        console.error(
            'Unable to retrieve error message from server. It is likely this is just a 404 in a fetch() operation.\nCheck URLs in index.js and ensure the backend server.js is running.\n Error stack: '
        );
        console.log(err);
        console.log(res);
    }
}

//Big function to format an int into a phone number string
export function formatPhone(number) {
    const nString = number.toString();
    if (nString.length < 10 || nString.length > 11) {
        return false;
    }
    if (nString.length === 11) {
        const countryCode = Number(nString[0]);
        const areaCode = Number(nString.substring(1, 4));
        const middleThree = Number(nString.substring(4, 7));
        const lastFour = Number(nString.substring(7));
        return countryCode + ' (' + areaCode + ') ' + middleThree + '-' + lastFour;
    } else {
        const areaCode = Number(nString.substring(0, 3));
        const middleThree = Number(nString.substring(3, 6));
        const lastFour = Number(nString.substring(6));
        return '(' + areaCode + ') ' + middleThree + '-' + lastFour;
    }
}

//API object which will neatin up the index.js file
export const PeopleAPI = {
    //Get the list of employees from database file
    getPeople: function() {
        return fetch('/api/employees');
    },
    //postData sends data to the server database file for updating
    postData: function(data) {
        return fetch('/api/update', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    },
    //Upload a file to the associated ID
    uploadImage: function(id, file) {
        let formData = new FormData();
        formData.append('file', file);
        return fetch('/api/image-upload/' + id, {
            method: 'POST',
            body: formData
        });
    },
    //Delete the file associated with the ID
    deleteImage: function(id) {
        return fetch('api/image-upload/' + id + '/remove', {
            method: 'POST'
        });
    }
};
