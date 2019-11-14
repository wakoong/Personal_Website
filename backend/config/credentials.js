var express = require('express');
var rp = require('request-promise');
var app = express();

// console.log('env', process.env);

exports.tokenPromise = rp({
  method: 'POST',
  uri: `https://api.robinhood.com/oauth2/token/?username=${process.env.RH_USERNAME}&password=${process.env.RH_PASSWORD}&grant_type=password&client_id=${process.env.RH_CLIENT_ID}`,
  json: true,
})
  .then(function(response) {
    let credentials = {
      token: response.access_token,
    };
    // console.log('test', credentials)
    return credentials;
  })
  .catch(function(err) {
    return err;
  });
