// server.js

// setup =======================

var express = require('express');
var app = express(); 
var bodyParser = require('body-parser'); 
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(__dirname + '/public'));                 
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            
app.use(bodyParser.json());                                     

app.get('*', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/views/index.html')); 

});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);