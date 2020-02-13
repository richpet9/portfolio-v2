const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

//Postgres DB set up
let db = new Pool();

//Connect to DB
db.connect().catch(err => {
    console.error('[postgres] Error connecting to db server: ' + err);
    db = null;
});

//Get the recent project posts
router.get('/api/projects/:limit?', (req, res) => {
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
router.get('/api/blog-posts/:category?/:id?', (req, res) => {
    if (!db) {
        res.redirect('/');
        return;
    }

    const { category, id } = req.params;
    let query = 'SELECT * FROM blog_posts ';

    if (category) {
        query += "WHERE category LIKE '%" + category + "%' ";
        if (id) {
            query += 'AND id = ' + id + ' ';
        }
    }
    query += 'ORDER BY date DESC';

    db.query(query, (err, response) => {
        if (err) console.error('[postgres] error query: ' + err);
        else res.send(response.rows);
    });
});

module.exports = router;
