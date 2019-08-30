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

// app.get('/accounts', function(req, res) {
//   console.log(apiUrl + 'accounts/');
//   request(apiUrl + 'accounts', function(err, response, body) {
//     // console.log('error: ', err);
//     // console.log(response, response.statusCode);
//     // console.log(body, res, req.body, response);
//     res.send({ results: body });
//   });
// });

var credentials = {
  token: process.env.ROBINHOOD_TOKEN,
};

app.get('/accounts', function(req, res) {
  var Robinhood = require('robinhood')(credentials, function() {
    Robinhood.accounts(function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        console.log('accounts');
        console.log(body);
        res.send({ results: body });
        //{ previous: null,
        //  results:
        //   [ { deactivated: false,
        //       updated_at: '2016-03-11T20:37:15.971253Z',
        //       margin_balances: [Object],
        //       portfolio: 'https://api.robinhood.com/accounts/asdf/portfolio/',
        //       cash_balances: null,
        //       withdrawal_halted: false,
        //       cash_available_for_withdrawal: '692006.6600',
        //       type: 'margin',
        //       sma: '692006.6600',
        //       sweep_enabled: false,
        //       deposit_halted: false,
        //       buying_power: '692006.6600',
        //       user: 'https://api.robinhood.com/user/',
        //       max_ach_early_access_amount: '1000.00',
        //       cash_held_for_orders: '0.0000',
        //       only_position_closing_trades: false,
        //       url: 'https://api.robinhood.com/accounts/asdf/',
        //       positions: 'https://api.robinhood.com/accounts/asdf/positions/',
        //       created_at: '2015-06-17T14:53:36.928233Z',
        //       cash: '692006.6600',
        //       sma_held_for_orders: '0.0000',
        //       account_number: 'asdf',
        //       uncleared_deposits: '0.0000',
        //       unsettled_funds: '0.0000' } ],
        //  next: null }
      }
    });
  });
});

// var Robinhood = require('robinhood')(credentials, function() {
//   //{interval=5minute|10minute (required) span=week|day| }

//   Robinhood.historicals('TERP', '5minute', 'day', function(
//     err,
//     response,
//     body
//   ) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('got historicals');
//       console.log(body);
//       //
//       //    { quote: 'https://api.robinhood.com/quotes/AAPL/',
//       //      symbol: 'AAPL',
//       //      interval: '5minute',
//       //      span: 'week',
//       //      bounds: 'regular',
//       //      previous_close: null,
//       //      historicals:
//       //       [ { begins_at: '2016-09-15T13:30:00Z',
//       //           open_price: '113.8300',
//       //           close_price: '114.1700',
//       //           high_price: '114.3500',
//       //           low_price: '113.5600',
//       //           volume: 3828122,
//       //           session: 'reg',
//       //           interpolated: false },
//       //         { begins_at: '2016-09-15T13:35:00Z',
//       //           open_price: '114.1600',
//       //           close_price: '114.3800',
//       //           high_price: '114.7300',
//       //           low_price: '114.1600',
//       //           volume: 2166098,
//       //           session: 'reg',
//       //           interpolated: false },
//       //         ... 290 more items
//       //      ]}
//       //
//     }
//   });
// });

app.listen(3001, function() {
  console.log('server running at port 3001');
});
