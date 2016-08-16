const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

var port = process.env.PORT || 8080;

var server = http.createServer(app);
server.listen(port, function () {
  console.log('Listening on port ' + port + '.');
});

app.get('/', function (req, res){
  res.sendFile(__dirname + '/views/index.html');
});
