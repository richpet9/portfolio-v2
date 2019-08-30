const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'richie',
  password: '=nx&3Mmn^$jC+/]V',
  database: 'portfolio'
});

db.connect(err => {
  if (err) console.error('[mysql] error while connecting: ' + err);
});

//db.query('SELECT * FROM projects', (err, res, fields) => {
//   if (!err) {
//     for (row of res) {
//       console.log(row.name);
//     }
//   }
// });

//Middleware
const bodyParser = require('body-parser');

//App config
const app = express();
const PORT = 8080;

//Middleware
app.use(bodyParser.json());

//Frontend
app.use(express.static('frontend/public'));

//Get the recent posts
app.get('/api/posts/:limit?', (req, res) => {
  db.query('SELECT * FROM projects ORDER BY id DESC' + (req.params.limit ? ' LIMIT ' + req.params.limit : ''), (err, rows) => {
    if (err) console.error('[mysql] error query: ' + err);
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`[server] listening on port ${PORT}`);
});
