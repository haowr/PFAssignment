// server.js

// setup =======================

var express = require('express');
var app = express();  // create the app with express.
var bodyParser = require('body-parser'); // pull information from html POST
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json

app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/views/index.html')); // this might need to be lower than the routes..
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);