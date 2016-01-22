// this is essentially an import
var express = require('express');
// import express handlebars this does templating
var exphbs  = require('express-handlebars');
// this lazily loads the module
var app = express();

// tell express (the web framework) to use handebars
// and we're going to use main as the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// this speaks for itself, right?
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// serve up any request to /static using files from public
app.use('/static', express.static('public'));

var viewCounter = 1000;
// Respond to a request
app.get('/', function (req, res) {
  res.render('home', {
    "firstname": req.query.first,
    "lastname": req.query.last,
    "title": "Something",
    "views": viewCounter,
    "list": [
      {"title": "something", "body": "moar stuff"},
      {"title": "another thing", "body": "even more!"}
    ]
  });
  app.post("/form_handler",function(request, response) {
    console.log(request.body);
    response.json(request.body);
//    response.send('Hello');
  });
  viewCounter++;
//  res.send('Hello World!');
});

// Listen as a server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
