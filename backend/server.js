const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
// Routes
const apiRouter = require('./routes/api');
const blogRouter = require('./routes/blog');
const mainRouter = require('./routes/main');
const { Pool } = require('pg');

//App config
const app = express();
const PORT = 8080;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Postgres DB set up
const pool = new Pool();

// Show errors on pool
pool.on('error', (err, client) => {
    console.error('[server] Unexpected error on idle client', err)
    process.exit(-1)
})

// Set up nodemailer
// Instantiate the SMTP server
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

//Frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Catch all api requests
app.use('/api', apiRouter({ pool, transport }));
// Blog bundles are split off from main website to increase load time
app.use('/blog', blogRouter);
// All other requests to front end
app.use('/*', mainRouter);

//Listen on PORT
app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
    pool.query('SELECT NOW()', (err, res) => {
        console.log(`[server] pool test => `, err ? err : res.rows[0]);
    })
});
