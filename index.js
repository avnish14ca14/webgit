const express = require('express');
const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    fs.chmod('./gitauto.sh', 0o666, err => {
        if(err) throw err;
        console.log('File permission changed');
        shell.exec('sh ./gitauto.sh');
    });
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});