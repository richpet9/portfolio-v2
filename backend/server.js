const express = require('express');

const app = express();

const PORT = 8080;

app.use(express.static('frontend/public'));

app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
