const express = require('express');
const path = require('path');
const { Pool } = require('pg');

//Postgres DB
let pool = new Pool({
    user: 'richie',
    host: 'localhost',
    database: 'portfolio',
    password: '=nx&3Mmn^$jC+/]V',
    port: 5432
});

//Connect to DB
pool.connect().catch(err => {
    console.error('[mysql] Error connecting to mysql server: ' + err);
    pool = null;
});

//Middleware
const bodyParser = require('body-parser');

//App config
const app = express();
const PORT = 8080;

//Middleware
app.use(bodyParser.json());

//Frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

//Get the recent posts
app.get('/api/posts/:limit?', (req, res) => {
    if (!pool) {
        res.redirect('/');
        return;
    }

    const query = 'SELECT * FROM projects ORDER BY id DESC' + (req.params.limit ? ' LIMIT ' + req.params.limit : '');

    pool.query(query, (err, response) => {
        if (err) console.error('[postgres] error query: ' + err);
	else res.send(response.rows);
    });
});

//Catch all other requests and forward to frontend
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
})
