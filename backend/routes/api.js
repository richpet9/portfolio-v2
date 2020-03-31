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
router.get('/api/projects/:id?', (req, res) => {
    if (!db) {
        res.redirect('/');
        return;
    }
    let query;

    if (req.params.id) {
        query = 'SELECT * FROM projects WHERE id = ' + req.params.id + ' ORDER BY id DESC';
    } else {
        query = 'SELECT * FROM projects ORDER BY id DESC LIMIT 10';
    }

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
