const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Postgres DB set up
let db = new Pool();

//Connect to DB
db.connect().catch((err) => {
    console.error('[postgres] Error connecting to db server: ' + err);
    db = null;
});

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
app.use('/api', apiRouter({ db, transport }));
// Blog bundles are split off from main website to increase load time
app.use('/blog', blogRouter);
// All other requests to front end
app.use('/*', mainRouter);

//Listen on PORT
app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
