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
    res.render('index.ejs');
});

app.post('/submit', (req, res, next) => {
    if(req.body.textfield.length){
        fs.chmod('./gitauto.sh', 0o666, err => {
            if(err) throw err;
            console.log('File permission changed');
            shell.exec('sh ./gitauto.sh');
        });
        res.redirect('/viewpage/?name='+req.body.textfield);
        return;
    }
    res.redirect('/');
});

app.get('/viewpage', (req, res) => {
    res.render('viewpage.ejs', { name : req.query.name});
});

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});