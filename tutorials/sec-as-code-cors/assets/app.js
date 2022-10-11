var express = require('express');

var SERVER_PORT = 1111;

var DATA = {
  '1': {'contact': 'John Doo'},
  '2': {'contact': 'Paul John'}
};

var server = express();
server.use(express.static(__dirname));
server.get('/contacts', function(req, res) {
  res.json(DATA);
});
server.listen(SERVER_PORT, function() {
  console.log('Server started');
});
