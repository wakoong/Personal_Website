var express = require('express');
var app = express();
const result = require('dotenv').config();

var credentials = {
  token: process.env.ROBINHOOD_TOKEN,
};

var Robinhood = require('robinhood')(credentials, function() {
  //{interval=5minute|10minute (required) span=week|day| }

  Robinhood.historicals('TERP', '5minute', 'day', function(
    err,
    response,
    body
  ) {
    if (err) {
      console.error(err);
    } else {
      console.log('got historicals');
      console.log(body);
      //
      //    { quote: 'https://api.robinhood.com/quotes/AAPL/',
      //      symbol: 'AAPL',
      //      interval: '5minute',
      //      span: 'week',
      //      bounds: 'regular',
      //      previous_close: null,
      //      historicals:
      //       [ { begins_at: '2016-09-15T13:30:00Z',
      //           open_price: '113.8300',
      //           close_price: '114.1700',
      //           high_price: '114.3500',
      //           low_price: '113.5600',
      //           volume: 3828122,
      //           session: 'reg',
      //           interpolated: false },
      //         { begins_at: '2016-09-15T13:35:00Z',
      //           open_price: '114.1600',
      //           close_price: '114.3800',
      //           high_price: '114.7300',
      //           low_price: '114.1600',
      //           volume: 2166098,
      //           session: 'reg',
      //           interpolated: false },
      //         ... 290 more items
      //      ]}
      //
    }
  });
});

app.listen(3001, function() {
  console.log('server running at port 3001');
});
