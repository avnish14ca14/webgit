const express = require('express');
const shell = require('shelljs');
const fs = require('fs');
var ejs = require('ejs');
var bodyParser = require('body-parser');
// const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', (req, res) => {
    // fs.chmod('./gitauto.sh', 0o666, err => {
    //     if(err) throw err;
    //     console.log('File permission changed');
    //     /shell.exec('sh ./gitauto.sh');
    // });
    res.render('index.ejs');
});

app.post('/submit', (req, res) => {
    console.log(req.body.textfield);
    res.redirect('/');
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});