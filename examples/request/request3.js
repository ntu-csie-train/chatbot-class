const request = require('request');

let options = {
  url: 'https://maps.googleapis.com/maps/api/geocode/json',
  method: 'GET',
  qs: {
    address: 'taipei 101',
  }
};

request(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
