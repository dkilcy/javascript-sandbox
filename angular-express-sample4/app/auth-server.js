/**
 * http://blog.auth0.com/2014/01/07/angularjs-authentication-with-cookies-vs-token/
 */

var express = require('express');
var jwt = require('jsonwebtoken'); //https://npmjs.org/package/node-jsonwebtoken
var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt

var secret = 'this is the secret 01234567';

var app = express();

// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(express.json());
app.use(express.urlencoded());
app.use('/', express.static(__dirname + '/'));

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.send(401, 'Unauthorized');
  }
});

app.post('/authenticate', function (req, res) {
  //TODO validate req.body.username and req.body.password
  //if is invalid, return 401
	console.log( "username=" + req.body.username + " password='" + req.body.password + "'");
	
  if (!(req.body.username === 'user' && req.body.password === 'password')) {
    res.send(401, 'Wrong user or password');
    //console.log(res);
    return;
  }

  var credentials = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };

  // We are sending the profile inside the token
  var token = jwt.sign(credentials, secret, { expiresInMinutes: 60*5 });

  res.json({ token: token });
});

app.post('/greeting', function (req, res) {
  console.log('info', 'user ' + req.body.username  + ' calling /greeting');
  res.json({
    id:1, content:'foo'
  });
});

app.listen(8080, function () {
  console.log('listening on http://localhost:8080');
});
