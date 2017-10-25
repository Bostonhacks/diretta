const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port);
console.log('Now running on port: ' + port);


app.get('/', function (req, res) {
    res.render('index.ejs');
});