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

app.get('/login', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.accounts(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        console.log('Successfully logged in.');
        var results = body.results[0];
        console.log(results);
        res.send({ results: results });
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

app.get('/portfolio', function(req, res) {
  var portfolio = request(
    {
      method: 'GET',
      uri: 'https://api.robinhood.com/portfolios/',
      headers: {
        Authorization: `Bearer ${process.env.ROBINHOOD_TOKEN}`,
      },
    },
    function(err, response, body) {
      if (err) {
        console.log(err);
      } else {
        var results = JSON.parse(body).results[0];
        res.send({ results: results });
      }
    }
  );
});

let options = {
  updated_at: '2019-08-25',
};

app.get('/orders', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.orders(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        var results = body.results.filter((order) => order.state === 'filled');
        res.send({ results: results });
      }
    });
  });
});

app.get('/positions', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.positions(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        var results = body.results.filter((b) => parseInt(b.quantity) > 0);
        res.send({ results: results });
      }
    });
  });
});

app.post('/instrument', function(req, res) {
  var instrument = request(req.body.url, function(error, response, body) {
    // var results = JSON.parse(body).results;
    var results = JSON.parse(body);
    res.send({ results: results });
  });
});

app.post('/quotes', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.quote_data(req.body.symbol, function(error, response, body) {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      var results = body.results[0];
      res.send({ results: results });
    });
  });
});

app.listen(3001, function() {
  console.log('server running at port 3001');
});
