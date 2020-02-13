const express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});