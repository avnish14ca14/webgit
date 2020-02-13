const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('port 8000 is open');
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});