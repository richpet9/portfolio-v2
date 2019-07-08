const express = require('express');
const path = require('path');
const fs = require('fs');

//Middleware
const bodyParser = require('body-parser');
const multer = require('multer');

//Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/../frontend/public/img/profile-images'));
    },
    filename: (req, file, cb) => {
        cb(null, req.params.id + '.jpg');
    }
});
const upload = multer({ storage: storage });

//App config
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
    if (!req.body) {
        res.status(400).send({ message: 'Error: no body provided' });
    } else {
        fs.writeFile(path.join(__dirname, 'people.json'), JSON.stringify(req.body), err => {
            if (err) {
                console.log('ERROR WRITING FILE: ', err);
                res.status(400).send({ message: err.toString() });
            } else {
                res.status(200).sendFile(path.join(__dirname, 'people.json'));
            }
        });
    }
});

//Update profile images using Multer middleware
app.post('/api/image-upload/:id/:remove?', upload.single('file'), (req, res) => {
    if (!req.params.id) {
        res.status(400).send({ message: 'Please provide a user ID for image.' });
    } else {
        if (req.params.remove) {
            //Remove the file
            fs.unlink(path.join(__dirname, '/../frontend/public/img/profile-images/' + req.params.id + '.jpg'), err => {
                if (err && err.errno !== -2) {
                    //errno -2 is file not found, which doesn't really matter that just means the user has default image
                    console.log('ERROR deleting file: ', err);
                    res.status(400).send({ message: err.toString() });
                } else {
                    res.status(200).send({ message: 'sucessfully removed the file' });
                }
            });
        } else {
            res.status(200).send({ message: 'sucessfully uploaded' });
        }
    }
});

//This is a fix for URL routing through the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
