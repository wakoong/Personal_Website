require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
var request = require('request');
var rp = require('request-promise');
var bodyParser = require('body-parser');

var allowedOrigins = [
  'http://localhost:1234',
  'https://lucid-sammet-7f2164.netlify.com/',
];

app.use(
  cors({
    origin: function(origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

var apiUrl = 'https://api.robinhood.com/';

let tokenPromise = rp({
  method: 'POST',
  uri: `https://api.robinhood.com/oauth2/token/?username=${
    process.env.RH_USERNAME
  }&password=${process.env.RH_PASSWORD}&grant_type=password&client_id=${
    process.env.RH_CLIENT_ID
  }`,
  json: true,
})
  .then(function(response) {
    return response;
  })
  .catch(function(err) {
    return err;
  });

(async function() {
  let credential = await Promise.resolve(tokenPromise);

  let credentials = {
    token: credential.access_token,
  };

  app.get('/api/login', function(req, res) {
    var Robinhood = require('robinhood')(credentials, function() {
      Robinhood.accounts(function(err, response, body) {
        if (err) {
          console.error(err);
        } else {
          console.log('Successfully logged in.');
          var results = body.results[0];
          res.send({ results: results });
        }
      });
    });
  });

  app.get('/api/logout', function(req, res) {
    var Robinhood = require('robinhood')(credentials, function() {
      Robinhood.expire_token(function(err, response, body) {
        if (err) {
          console.error(err);
        } else {
          console.log(
            'Successfully logged out of Robinhood and expired token.'
          );
          res.send({ status: 'logged out' });
          // NOTE: body is undefined on the callback
        }
      });
    });
  });

  app.get('/api/portfolio', function(req, res) {
    var portfolio = request(
      {
        method: 'GET',
        uri: 'https://api.robinhood.com/portfolios/',
        headers: {
          Authorization: `Bearer ${credentials.token}`,
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

  app.get('/api/orders', function(req, res) {
    var Robinhood = require('robinhood')(credentials, function() {
      Robinhood.orders(function(err, response, body) {
        if (err) {
          console.error(err);
        } else {
          var data = body.results.filter((order) => order.state === 'filled');
          var results = {};
          var unique = [...new Set(data.map((item) => item.instrument))];
          for (var i = 0; i < unique.length; i++) {
            results[unique[i]] = data.filter(
              (item) => item.instrument === unique[i]
            );
          }

          res.send({ results: results });
        }
      });
    });
  });

  app.get('/api/positions', function(req, res) {
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

  app.post('/api/quotes', function(req, res) {
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
})();

app.post('/api/instrument', function(req, res) {
  var instrument = request(req.body.url, function(error, response, body) {
    var results = JSON.parse(body);
    res.send({ results: results });
  });
});

app.listen(3001, function() {
  console.log('server running at port 3001');
});
