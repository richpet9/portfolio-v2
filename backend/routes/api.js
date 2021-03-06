const express = require('express');
const router = express.Router();

module.exports = function (args) {
    let pool = args.pool || null;
    let transport = args.transport || null;

    //Get the recent project posts
    router.get('/projects/:id?', (req, res) => {
        if (!pool) {
            res.redirect('/');
            console.error('[server] Attempted to access invalid database!');
            return;
        }
        let queryStr;

        if (req.params.id) {
            queryStr = 'SELECT * FROM projects WHERE id = ' + req.params.id;
        } else {
            queryStr = 'SELECT * FROM projects ORDER BY date DESC';
        }

            console.log('[server] Querying DB for projects: ' + queryStr);
        pool.query(queryStr, (err, response) => {

	    if (err) {
                console.error('[postgres] error query: ' + err);
                res.status(501).send('Bad pool');
            } else res.send(response.rows);
        });
    });

    //Get the recent blog posts
    router.get('/blog-posts/:category?/:id?', (req, res) => {
        if (!pool) {
            res.redirect('/');
            console.error('[server] Attempted to access invalid database!');
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

        pool.query(query, (err, response) => {
            if (err) {
                console.error('[postgres] error query: ' + err);
                res.status(501).send('Bad pool');
            } else res.send(response.rows);
        });
    });

    // Send emails to me from the contact form
    router.post('/mail/send', (req, res) => {
        // Make sure we have the transport service
        if (!transport) {
            res.sendStatus(500);
            console.error('[server] Attempted to use invalid transport email service!');
            return;
        }
        // Make sure we have all required arguements
        if (!req.body.name || !req.body.email || !req.body.message) {
            res.sendStatus(500);
            console.error(`No body content found: name:${req.body.name} email:${req.body.email} msg:${req.body.message} `);
            return;
        }

        // Specify what the email will look like
        const mailOpts = {
            from: 'Your sender info here', // This is ignored by Gmail
            to: process.env.GMAIL_USER,
            subject: 'New message from contact form at richardpetrosino.com',
            text: `${req.body.name} (${req.body.email}) says: \n${req.body.message}`,
        };

        transport.sendMail(mailOpts, (error, response) => {
            if (error) {
                res.statusMessage = error;
                res.sendStatus(500); // failure
                console.error('[server] Mailer error: ' + error);
            } else {
                res.statusMessage = 'Email sent.';
                res.sendStatus(200); // success
            }
        });
    });

    return router;
};
