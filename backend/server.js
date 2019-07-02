const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.static('frontend/public'));

app.get('/api/employees', (req, res) => {
    res.sendFile(path.join(__dirname, 'people.json'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../frontend/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`[server] listening on port ${PORT}`);
});
