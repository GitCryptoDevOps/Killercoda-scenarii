var express = require('express');

var SERVER_PORT = 1111;

var DATA = {
  '1': {'contact': 'John Doo'},
  '2': {'contact': 'Paul John'}
};

function handleCors (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  next();
};

var server = express();
server.use(express.static(__dirname));
server.use(handleCors);
server.get('/contacts', function(req, res) {
  res.json(DATA);
});
server.listen(SERVER_PORT, function() {
  console.log('Server started');
});

var CLIENT_PORT = 5555;

var client = express();
client.use(express.static(__dirname));
client.listen(CLIENT_PORT, function() {
  console.log('Client started');
});
