const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Routes
const apiRouter = require('./routes/api');
const blogRouter = require('./routes/blog');
const mainRouter = require('./routes/main');

//App config
const app = express();
const PORT = 8080;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Frontend
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Catch all api requests
app.get('/api*', apiRouter);
// Blog bundles are split off from main website to increase load time
app.get('/blog*', blogRouter);
// All other requests to front end
app.get('/*', mainRouter);

//Listen on PORT
app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
