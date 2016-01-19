// this is essentially an import
var express = require('express');
// import express handlebars
var exphbs  = require('express-handlebars');
// this lazily loads the module
var app = express();

// tell express (the web framework) to use handebars
// and we're going to use main as the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// this speaks for itself, right?
app.set('view engine', 'handlebars');

// serve up any request to /static using files from public
app.use('/static', express.static('public'));

var viewCounter = 1000;
// Respond to a request
app.get('/', function (req, res) {
  res.render('home', {
    "title": "Something",
    "views": viewCounter,
    "list": [
      {"title": "something", "body": "moar stuff"},
      {"title": "another thing", "body": "even more!"}
    ]
  });
  viewCounter++;
//  res.send('Hello World!');
});

// Listen as a server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
