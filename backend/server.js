const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const PORT = 8080;

//Middleware
app.use(bodyParser.json());

//Frontend
app.use(express.static('frontend/public'));

//Get database file
app.get('/api/employees', (req, res) => {
    res.sendFile(path.join(__dirname, 'people.json'));
});

//Update database file
app.post('/api/update', (req, res) => {
    fs.writeFile(path.join(__dirname, 'people.json'), JSON.stringify(req.body), err => {
        if (err) {
            console.log('ERROR WRITING FILE: ', err);
            res.status(400).send({ message: 'There was an error writing the file' });
        } else {
            res.status(200).sendFile(path.join(__dirname, 'people.json'));
        }
    });
});

//This is a fix for URL routing through the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
