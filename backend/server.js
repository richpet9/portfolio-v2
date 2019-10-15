const express = require('express');
const path = require('path');
const { Pool } = require('pg');

//Postgres DB
const pool = new Pool({
  user: 'richie',
  host: 'localhost',
  database: 'portfolio',
  password: '=nx&3Mmn^$jC+/]V',
  port: 5432
});

//Connect to DB
pool.connect();

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
  pool.query('SELECT * FROM projects ORDER BY id DESC' + (req.params.limit ? ' LIMIT ' + req.params.limit : ''), (err, response) => {
    if (err) console.error('[mysql] error query: ' + err);
    res.send(response.rows);
  });
});

//Catch all other requests and forward to frontend
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`[server] listening on port ${PORT}`);
});
