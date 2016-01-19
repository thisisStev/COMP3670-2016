// this is essentially an import
var express = require('express');
// this lazily loads the module
var app = express();

// serve up any request to /static using files from public
app.use('/static', express.static('public'));

// Respond to a request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Listen as a server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
