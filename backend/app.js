require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParser = require('body-parser');

var allowedOrigins = ['http://localhost:1234', 'http://localhost:3001'];
app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        var message =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(message), false);
      }

      return callback(null, true);
    },
  })
);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

var apiUrl = 'https://api.robinhood.com/';

var credentials = {
  token: process.env.ROBINHOOD_TOKEN,
};

console.log(credentials);

app.get('/login', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.accounts(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        console.log('accounts');
        console.log(body);
        res.send({ results: body });
      }
    });
  });
});

app.get('/logout', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.expire_token(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully logged out of Robinhood and expired token.');
        res.send({ status: 'logged out' });
        // NOTE: body is undefined on the callback
      }
    });
  });
});

let options = {
  updated_at: '2019-08-25',
};

app.get('/orders', function(req, res) {
  // var results = request.get('https://api.robinhood.com/orders');

  // res.send({ orders: results });
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.orders(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        // console.log('orders');
        // console.log(body);
        res.send({ results: body });
      }
    });
  });
});

app.post('/instrument', function(req, res) {
  var instrument = request(req.body.url, function(error, response, body) {
    res.send({ results: body });
  });
});

app.listen(3001, function() {
  console.log('server running at port 3001');
});
