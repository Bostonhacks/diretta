require('dotenv').load();
const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port);
console.log('Now running on port: ' + port);


app.get('/', function (req, res) {
    res.render('index.ejs');
});

io.on('connection', function(socket){
  console.log('a user connected');
  // socket.on('connection', function(){
  // 	console.log("Hello world!");
  // });
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});