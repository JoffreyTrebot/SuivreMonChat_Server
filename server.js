// Imports
var express = require('express');
var bodyParser = require('body-parser');

// Intantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

// Configure routes
server.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur !</h1>');
});

// Launch server
server.listen(8081, function(){
    console.log('Serveur en écoute');
});