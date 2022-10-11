var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var csrf = require('csurf');
var app = express();

var SERVER_PORT = 5555;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'the-secret',
  saveUnitialized: true,
  resave: true
}));
app.use(csrf());

app.get('/form-csrf', function(req, res) {
  var form = '<html>\r\n';
  form += '<body>\r\n';
  form += '<form action="/validate-csrf" method="post">\r\n';
  form += '<input type="text" name="_csrf" value="' + req.csrfToken() + '" />\r\n';
  form += '<input type="submit" value="Submit" />\r\n';
  form += '</form>\r\n';
  form += '</body>\r\n';
  form += '</html>';
  res.send(form);
});
app.post('/validate-csrf', function(req, res) {
  res.send('CSRF token received');
});

app.use(function(err, req, res, next) {
  res.status(403).send('Bad token CSRF received');
})

app.listen(SERVER_PORT, function() {
  console.log('Server started');
});
