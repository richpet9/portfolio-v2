const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

//Load the env variables
require('dotenv').config();

//App config
const app = express();
const PORT = 8080;

//Postgres DB set up
let db = new Pool();

//Connect to DB
db.connect().catch(err => {
    console.error('[postgres] Error connecting to db server: ' + err);
    db = null;
});

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

//Get the recent project posts
app.get('/api/projects/:limit?', (req, res) => {
    if (!db) {
        res.redirect('/');
        return;
    }

    const query = 'SELECT * FROM projects ORDER BY id DESC' + (req.params.limit ? ' LIMIT ' + req.params.limit : '');

    db.query(query, (err, response) => {
        if (err) console.error('[postgres] error query: ' + err);
        else res.send(response.rows);
    });
});

//Get the recent blog posts
app.get('/api/blog/posts/:limit?', (req, res) => {
    if (!db) {
        res.redirect('/');
        return;
    }

    const query = 'SELECT * FROM blog_posts ORDER BY id DESC' + (req.params.limit ? ' LIMIT ' + req.params.limit : '');

    db.query(query, (err, response) => {
        if (err) console.error('[postgres] error query: ' + err);
        else res.send(response.rows);
    });
});

//Catch all other requests and forward to frontend
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

//Listen on PORT
app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
